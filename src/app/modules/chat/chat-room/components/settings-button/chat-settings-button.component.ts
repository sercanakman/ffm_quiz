import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State as ChatState} from '../../../../../store/chat/chat.state';
import {AppStates, selectChatState} from '../../../../../store/app.states';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {ChatRoomSettingsToggled} from '../../../../../store/chat/chat.actions';

@Component({
  selector: 'chat-settings-button',
  templateUrl: './chat-settings-button.component.html',
  styleUrls: ['./chat-settings-button.component.scss']
})
export class ChatSettingsButtonComponent implements OnInit {
  @HostBinding('class') class = 'col-2';
  public chatState$: Observable<ChatState>;
  constructor(
    private store: Store<AppStates>,
  ) {
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {
  }

  toggleSettings() {
    this.store.dispatch(new ChatRoomSettingsToggled())
  }

}
