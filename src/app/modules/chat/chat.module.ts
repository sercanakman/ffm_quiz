import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatRoutingModule} from './chat-routing.module';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '../../shared/modules/font-awesome.module';
import {FormsModule} from '@angular/forms';
import { ChatRoomCardComponent } from './chat-rooms/components/chat-room-card/chat-room-card.component';
import {ChatRoomHeaderComponent} from './chat-room/components/header/chat-room-header.component';
import { ChatUserListComponent } from './chat-room/components/user-list/chat-user-list.component';
import {ChatRoomMessagesListComponent} from './chat-room/components/messages-list/chat-room-messages-list.component';
import {ChatNewMessageComponent} from './chat-room/components/new-message/chat-new-message.component';
import {ChatSidebarComponent} from './chat-room/components/sidebar/chat-sidebar.component';
import {ChatSettingsComponent} from './chat-room/components/settings/chat-settings.component';
import {ChatSettingsButtonComponent} from './chat-room/components/settings-button/chat-settings-button.component';

@NgModule({
  declarations: [
    ChatRoomComponent,
    ChatRoomsComponent,
    ChatRoomCardComponent,
    ChatRoomHeaderComponent,
    ChatRoomMessagesListComponent,
    ChatSettingsButtonComponent,
    ChatNewMessageComponent,
    ChatSettingsComponent,
    ChatSidebarComponent,
    ChatUserListComponent,
  ],
  imports: [
    CommonModule,
    /*
    NgbModule and FontAwesomeModule could be imported into CommonModule (reexporting itself
    with extended modules)
     */
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ChatRoutingModule,
  ]
})
export class ChatModule { }
