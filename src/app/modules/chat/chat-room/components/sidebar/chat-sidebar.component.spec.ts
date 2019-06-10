import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSidebarComponent } from './chat-sidebar.component';
import {ChatUserListComponent} from '../user-list/chat-user-list.component';
import {ChatSettingsComponent} from '../settings/chat-settings.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '../../../../../shared/modules/font-awesome.module';
import {FormsModule} from '@angular/forms';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState as initialChatState} from '../../../../../store/chat/chat.state';
import {Observable} from 'rxjs';

describe('ChatSidebarComponent', () => {
  let component: ChatSidebarComponent;
  let fixture: ComponentFixture<ChatSidebarComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgbModule,
        FontAwesomeModule,
      ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialChatState})
      ],
      declarations: [ ChatSidebarComponent, ChatUserListComponent, ChatSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
