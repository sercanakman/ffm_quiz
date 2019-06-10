import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomComponent } from './chat-room.component';
import {ChatRoomHeaderComponent} from './components/header/chat-room-header.component';
import {ChatRoomMessagesListComponent} from './components/messages-list/chat-room-messages-list.component';
import {ChatSettingsButtonComponent} from './components/settings-button/chat-settings-button.component';
import {ChatNewMessageComponent} from './components/new-message/chat-new-message.component';
import {ChatSidebarComponent} from './components/sidebar/chat-sidebar.component';
import {ChatUserListComponent} from './components/user-list/chat-user-list.component';
import {ChatSettingsComponent} from './components/settings/chat-settings.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '../../../shared/modules/font-awesome.module';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState as initialChatState} from '../../../store/chat/chat.state';
import {Observable} from 'rxjs';

describe('ChatRoomComponent', () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        NgbModule,
        FontAwesomeModule,
      ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialChatState})
      ],
      declarations: [ ChatRoomComponent, ChatSidebarComponent, ChatUserListComponent, ChatSettingsComponent, ChatRoomHeaderComponent, ChatRoomMessagesListComponent, ChatSettingsButtonComponent, ChatNewMessageComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
