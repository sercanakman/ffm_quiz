import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {rooms} from '../../../shared/mocks/rooms';
import {currentUser, users} from '../../../shared/mocks/users';
import {messages} from '../../../shared/mocks/messages';
import {User} from '../../../shared/interfaces/user';
import {Message} from '../../../shared/interfaces/message';
import {ChatRoom} from '../../../shared/interfaces/chat-room';

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/comments

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private rooms: ChatRoom[] = rooms.map(this.setupChatroom);
  constructor() { }

  getChatRooms(): Observable<ChatRoom[]> {
    /*
      here you would expect to get some metadata of all rooms (probably paginated via pagination or infinite scroll
      though the best practice is the use old style pagination in apps like these. there is also a good article about
      this scrolling methods: https://logrocket.com/blog/infinite-scroll/

      the metadata would contain brief information like number of users, thumbnail, title
      or the nickname of room owner, body etc. not to bloat the size of response and memory in the client

      although it may prove efficient in some situations getting all rooms and caching them in localStorage
      but it would not create a real-time experience
     */
    return of(this.rooms);
  }

  getChatRoom(id: number): Observable<{chatRooms: ChatRoom[], activeChat: ChatRoom}> {
    /*
      here we would expect to get all publicly available data related to the chatroom
      the rooms are setup on constructor level via this.setupChatroom which populates the room
      with some random users and messages (taken from JSONPlaceholder)

      in real-world scenario we would get the data of the room expect the messages
      which would be loaded via websockets to create live UX.

      the code is not simulating live functionality as not required in the spec
      nor does it simulate sending messages from other users as if they sent it
      when you are in the chat room
     */
    const room = this.rooms.find(r => r.id === id);
    return of({chatRooms: this.rooms, activeChat: room});
  }

  getCurrentUser(): Observable<User> {
    return of(currentUser);
  }

  /*
    we would not need any of these if these were already handled by backend
   */
  private setupChatroom(room: ChatRoom): ChatRoom {
    /*
      we create relations between users and rooms
     */
    room.users = [
      users.find((user: User) => user.id === room.userId),
    ];

    /*
      this is used to shuffle messages because they are linear (meaning they back to back
      belong to the same user) so that message merging can work appropriately
      this would be already done by backend
     */
    const shuffleArray = (array: any[]) => {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    const random = Math.floor(Math.random() * users.length);
    const randomNumberOfPeople = random < 8 ? 14 : random;
    for (let index = 7; index < randomNumberOfPeople; index++) {
      const user = users[Math.floor(Math.random() * users.length)];
      /*
        add some number of UNIQUE users to the room
       */
      if (room.users.find((_user: User) => _user.id === user.id) === undefined) {
        room.users.push(user);
      }
    }

    room.messages = [];
    /*
      get only messages belonging to this room
     */
    room.messages.push(...messages.filter((message: Message) => message.chatroomId === room.id));
    let iterator = 1;
    room.messages = shuffleArray(room.messages).map((message: Message) => {
      const random2 = Math.floor(Math.random() * room.users.length);
      const user = room.users[random2];
      /*
        create relation between message and a random user from user of room
       */
      message.userId = user.id;
      message.user = user;
      /*
        add timestamps
       */
      message.timestamps = new Date();
      const random3 = Math.floor(Math.random() * 5);
      /*
        simulate timing between messages to simulate merged messaging behaviour
        this would be handled by backend
        along with the formatting of the date via a package like moment
       */
      message.timestamps.setTime(message.timestamps.getTime() + (iterator * (random3 * [1000, 2000, 5000, 10000][Math.floor(Math.random() * 4)])) * 60);
      iterator++;
      return message;
    })
      /*
        sort by date from oldest on top to newest on bottom
       */
      .sort((messageA: Message, messageB: Message) => messageA.timestamps.getTime() - messageB.timestamps.getTime());

    let mergedMessages: string[] = [];
    /*
      this also would be done by backend
     */
    const processMessage = (message: Message, index: number, messages: Message[]) => {
      /*
        with the current iteration, keep adding message bodies to temporary message array
        if they are not already included
       */
      if(!mergedMessages.includes(message.body)) {
        mergedMessages.push(message.body);
      }

      const nextMessage = messages[index + 1];
      /*
        if there is not a next message (meaning end of messages)
        or that the next message in the array does not belong to the same user
        return a message with joined strings by \n to be appended into messages
       */
      if (!nextMessage || nextMessage.userId !== message.userId) {
        const mergedMessage = message;
        mergedMessage.body = mergedMessages.join('\n');
        /*
          the messages must be reset for next back-to-back messages
         */
        mergedMessages = [];
        return mergedMessage;
      }
    };



    const resultingMessages: Message[] = [];
    /*
      this part is also a backend work
     */
    for (let index = 0; index < room.messages.length; index++) {
      const result = processMessage(room.messages[index], index, room.messages);

      if (result !== undefined) {
        resultingMessages.push(result);
      }
    }

    return {
      ...room,
      messages: resultingMessages,
    };
  }
}
