import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ChatRoom, Message} from '../../../store/chat/chat.state';
import {rooms} from './rooms';
import {User} from '../../../store/user/user.state';
import {users} from './users.mock';
import {messages} from './messages';

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/comments

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getChatRooms(): Observable<ChatRoom[]> {
    return of(rooms.map((room: ChatRoom) => {
      room = this.setupChatroom(room);
      return room;
    }));
  }

  getChatRoom(id: number): Observable<ChatRoom> {
    const room = this.setupChatroom(rooms.find(r => r.id === id));
    return of(room);
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

    room.messages = []
    room.messages.push(...messages.filter((message: Message) => message.chatroomId === room.id));
    return room;
  }
}
