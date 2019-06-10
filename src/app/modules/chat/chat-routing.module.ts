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
        /*
          redirect user to rooms page if they hit the root url
         */
        redirectTo: '/rooms',
        pathMatch: 'full'
      },
      {
        path: 'rooms',
        /*
          the name of this component can be changed according to
          company naming conventions to ChatRoomsListComponent
         */
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
