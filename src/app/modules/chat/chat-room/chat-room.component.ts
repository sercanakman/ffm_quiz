import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppStates, selectAppState, selectChatState} from '../../../store/app.states';
import {Store} from '@ngrx/store';
import {ChatRoomLoad, ChatRoomMessageSend, ChatRoomSettingChange} from '../../../store/chat/chat.actions';
import {State as ChatState} from '../../../store/chat/chat.state';
import {interval, Observable, Subscription} from 'rxjs';
import {State as AppState} from '../../../store/app/app.state';
import {retry, retryWhen, take, timeout} from 'rxjs/operators';
import {Message} from '../../../shared/interfaces/message';
import {Settings, SETTINGS_PROPERTIES} from '../../../shared/interfaces/settings';


@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  public appState$: Observable<AppState>;
  public chatState$: Observable<ChatState>;

  constructor(
    private store: Store<AppStates>,
    private activatedRoute: ActivatedRoute
  ) {
    this.appState$ = this.store.select(selectAppState);
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.chatroomId) {
        this.store.dispatch(new ChatRoomLoad(parseInt(params.chatroomId, 10)));
      }
    });
  }

}
