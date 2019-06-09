import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ChatRoom, Message} from '../../../store/chat/chat.state';
import {rooms} from './rooms';
import {User} from '../../../store/user/user.state';
import {currentUser, users} from './users.mock';
import {messages} from './messages';

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
    return of(this.rooms);
  }

  getChatRoom(id: number): Observable<ChatRoom> {
    const room = this.rooms.find(r => r.id === id);
    return of(room);
  }

  getCurrentUser(): Observable<User> {
    return of(currentUser);
  }

  private setupChatroom(room: ChatRoom): ChatRoom {
    room.users = [
      users.find((user: User) => user.id === room.userId),
    ];

    const random = Math.floor(Math.random() * users.length);
    const randomNumberOfPeople = random > 5 ? random : 5;
    for (let index = 3; index < randomNumberOfPeople; index++) {
      const user = users[Math.floor(Math.random() * users.length)];
      if (room.users.find((_user: User) => _user.id === user.id) === undefined) {
        room.users.push(user);
      }
    }

    room.messages = [];
    room.messages.push(...messages.filter((message: Message) => message.chatroomId === room.id));
    let iterator = 1;
    room.messages = room.messages.map((message: Message) => {
      const random2 = Math.floor(Math.random() * room.users.length);
      const user = room.users[random2];
      message.userId = user.id;
      message.user = user;
      message.timestamps = new Date();
      message.timestamps.setTime(message.timestamps.getTime() + (iterator * 1000) * 60);
      iterator++;
      return message;
    });
    return room;
  }
}
