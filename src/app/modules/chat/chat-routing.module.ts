import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {ChatRoomsComponent} from './chat-rooms/chat-rooms.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/rooms',
        pathMatch: 'full'
      },
      {
        path: 'rooms',
        component: ChatRoomsComponent,
      },
      {
        path: ':chatroomId',
        component: ChatRoomComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
