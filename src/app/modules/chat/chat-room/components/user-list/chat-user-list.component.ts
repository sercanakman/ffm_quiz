import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State as ChatState} from '../../../../../store/chat/chat.state';
import {Store} from '@ngrx/store';
import {AppStates, selectChatState} from '../../../../../store/app.states';
import {take} from 'rxjs/operators';
import {Settings, SETTINGS_PROPERTIES} from '../../../../../shared/interfaces/settings';
import {ChatRoomSettingChange} from '../../../../../store/chat/chat.actions';

@Component({
  selector: 'chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent implements OnInit {
  @HostBinding('class') class = 'col h-100';
  public settings: Settings;
  public chatState$: Observable<ChatState>;
  constructor(
    private store: Store<AppStates>,
  ) {
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {
    this.chatState$.pipe(
      take(1)
    ).subscribe((chatState: ChatState) => {
      this.settings = chatState.settings;
    });
  }

}
