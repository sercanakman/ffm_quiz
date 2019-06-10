import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State as ChatState} from '../../../../../store/chat/chat.state';
import {AppStates, selectChatState} from '../../../../../store/app.states';
import {Store} from '@ngrx/store';

@Component({
  selector: 'chat-room-header',
  templateUrl: './chat-room-header.component.html',
  styleUrls: ['./chat-room-header.component.scss']
})
export class ChatRoomHeaderComponent implements OnInit {
  public chatState$: Observable<ChatState>;

  constructor(
    private store: Store<AppStates>,
  ) {
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {
  }

}
