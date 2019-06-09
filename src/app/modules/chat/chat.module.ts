import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatRoutingModule} from './chat-routing.module';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '../../shared/modules/font-awesome.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ChatRoomComponent,
    ChatRoomsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ChatRoutingModule,
    FontAwesomeModule,
  ]
})
export class ChatModule { }
