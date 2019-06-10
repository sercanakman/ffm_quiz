import {Component, ElementRef, HostBinding, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {State as AppState} from '../../../../../store/app/app.state';
import {State as ChatState} from '../../../../../store/chat/chat.state';
import {Message} from '../../../../../shared/interfaces/message';
import {ChatRoomMessageSend} from '../../../../../store/chat/chat.actions';
import {AppStates, selectAppState, selectChatState} from '../../../../../store/app.states';
import {Store} from '@ngrx/store';

@Component({
  selector: 'chat-new-message',
  templateUrl: './chat-new-message.component.html',
  styleUrls: ['./chat-new-message.component.scss']
})
export class ChatNewMessageComponent implements OnInit {
  @HostBinding('class') class = 'col';
  public newMessage = '';
  public appState$: Observable<AppState>;
  public chatState$: Observable<ChatState>;
  public scrollInterval$: Observable<number>;
  public intervalSub: Subscription;
  constructor(
    private store: Store<AppStates>,
  ) {
    this.appState$ = this.store.select(selectAppState);
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {
  }

  sendMessage() {
    this.scrollInterval$ = interval(100);
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

            this.intervalSub = this.scrollInterval$
              .pipe(
                take(1)
              )
              .subscribe(() => this.scrollLatestMessageIntoView());
          });
      });

  }

  private scrollLatestMessageIntoView() {
    const messagesList = document.getElementById('messages-list');
    messagesList.scrollTop = messagesList.scrollHeight;

  }

}
