import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State as ChatState} from '../../../../../store/chat/chat.state';
import {AppStates, selectChatState} from '../../../../../store/app.states';
import {Store} from '@ngrx/store';

@Component({
  selector: 'chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {
  @HostBinding('class') class = 'col-2 col-sm-5 col-md-4 col-lg-3 col-xl-2';
  @HostBinding('id') id = 'users-list';
  public chatState$: Observable<ChatState>;
  constructor(
    private store: Store<AppStates>,
  ) {
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {}

}
