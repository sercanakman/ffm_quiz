import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppStates, selectAppState, selectChatState} from '../../../store/app.states';
import {Store} from '@ngrx/store';
import {ChatRoomLoad, ChatRoomMessageSend, ChatRoomSettingChange} from '../../../store/chat/chat.actions';
import {Message, Settings, SETTINGS_PROPERTIES, State as ChatState} from '../../../store/chat/chat.state';
import {Observable} from 'rxjs';
import {State as AppState} from '../../../store/app/app.state';
import {take} from 'rxjs/operators';


@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  public SETTINGS_PROPERTIES = SETTINGS_PROPERTIES;
  public settings: Settings;
  public appState$: Observable<AppState>;
  public chatState$: Observable<ChatState>;
  public isSettingsOpen = false;
  public newMessage = '';
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

    this.chatState$.pipe(
      take(1)
    ).subscribe((chatState: ChatState) => {
      this.settings = chatState.settings;
    });
  }

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  onChangeSetting(setting: SETTINGS_PROPERTIES) {
    this.chatState$.pipe(
      take(1),
    ).subscribe((chatState: ChatState) => {
      this.store.dispatch(new ChatRoomSettingChange({property: setting, value: this.settings[setting]}))
    });
  }

  sendMessage() {
    this.appState$
      .pipe(
        take(1)
      )
      .subscribe((appState: AppState) => {
      this.chatState$
        .pipe(
          take(1)
        )
        .subscribe((chatState: ChatState) => {
        const message: Message = {
          chatroomId: chatState.activeChat.id,
          id: chatState.activeChat.messages.length,
          userId: appState.user.id,
          user: appState.user,
          name: appState.user.name,
          email: appState.user.email,
          body: this.newMessage,
          timestamps: new Date(),
        };
        this.store.dispatch(new ChatRoomMessageSend(message));
        this.newMessage = '';
      });
    });

  }

  formatDate(timestamps: Date) {
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
