import {Component, OnInit} from '@angular/core';
import {AppStates, selectChatState} from '../../../store/app.states';
import {Store} from '@ngrx/store';
import {ChatRoomsLoad} from '../../../store/chat/chat.actions';
import {Observable} from 'rxjs';
import {State as ChatState} from '../../../store/chat/chat.state';
import {Router} from '@angular/router';

@Component({
  selector: 'chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss']
})
export class ChatRoomsComponent implements OnInit {

  public chatState$: Observable<ChatState>;
  constructor(
    private router: Router,
    private store: Store<AppStates>,
  ) {
    this.chatState$ = this.store.select(selectChatState);
  }

  ngOnInit() {
    /*
      this triggers the effect which loads all room metadata to chatState$
      which is async pipe'd in the template
     */
    this.store.dispatch(new ChatRoomsLoad());
  }

}
