import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State as ChatState} from '../../../../../store/chat/chat.state';
import {Settings} from '../../../../../shared/interfaces/settings';
import {AppStates, selectChatState} from '../../../../../store/app.states';
import {Store} from '@ngrx/store';

@Component({
  selector: 'chat-room-messages-list',
  templateUrl: './chat-room-messages-list.component.html',
  styleUrls: ['./chat-room-messages-list.component.scss']
})
export class ChatRoomMessagesListComponent implements OnInit {
  @HostBinding('class') class = 'col h-100';
  @HostBinding('id') id = 'messages-list';
  @Input() chatState$: Observable<ChatState>;
  @Input() settings: Settings;

  constructor(
    private store: Store<AppStates>,
  ) {
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {

  }

  formatDate(timestamps: Date) {
    /*
      this could would be managed by backend or an external package
     */
    const year = timestamps.getFullYear();
    const month = timestamps.getMonth() + 1;
    const date = timestamps.getDate();
    const hours = timestamps.getHours();
    const minutes = timestamps.getMinutes();
    return `
      ${year}-${month.toString().length < 2 ? '0' + month : month}-${date.toString().length < 2 ? '0' + date : date} ${hours.toString().length < 2 ? '0' + hours : hours}:${minutes.toString().length < 2 ? '0' + minutes : minutes}
    `
  }

}
