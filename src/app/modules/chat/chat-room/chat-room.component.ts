import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppStates, selectChatState} from '../../../store/app.states';
import {Store} from '@ngrx/store';
import {ChatRoomLoad} from '../../../store/chat/chat.actions';
import {ChatRoom} from '../../../store/chat/chat.state';
import {Observable, Subscription} from 'rxjs';
import {State as ChatState} from '../../../store/chat/chat.state';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  public room: ChatRoom;
  public chatState$: Observable<ChatState>;
  public isSettingsOpen = false;
  constructor(
    private store: Store<AppStates>,
    private activatedRoute: ActivatedRoute
  ) {
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.chatroomId) {
        this.store.dispatch(new ChatRoomLoad(parseInt(params.chatroomId, 10)));
      }
    });
  }

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

}
