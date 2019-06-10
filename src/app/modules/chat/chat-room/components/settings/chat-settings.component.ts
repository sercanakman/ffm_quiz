import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Settings, SETTINGS_PROPERTIES} from '../../../../../shared/interfaces/settings';
import {take} from 'rxjs/operators';
import {State as ChatState} from '../../../../../store/chat/chat.state';
import {ChatRoomSettingChange} from '../../../../../store/chat/chat.actions';
import {Store} from '@ngrx/store';
import {AppStates, selectChatState} from '../../../../../store/app.states';
import {Observable} from 'rxjs';

@Component({
  selector: 'chat-settings',
  templateUrl: './chat-settings.component.html',
  styleUrls: ['./chat-settings.component.scss']
})
export class ChatSettingsComponent implements OnInit {
  @HostBinding('class') class = 'col';
  public settings: Settings;
  public chatState$: Observable<ChatState>;
  public SETTINGS_PROPERTIES = SETTINGS_PROPERTIES;
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

  onChangeSetting(setting: SETTINGS_PROPERTIES) {
    this.chatState$.pipe(
      take(1),
    ).subscribe((chatState: ChatState) => {
      this.store.dispatch(new ChatRoomSettingChange({property: setting, value: this.settings[setting]}))
    });
  }
}
