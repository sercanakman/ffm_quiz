import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomMessagesListComponent } from './chat-room-messages-list.component';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../../../../shared/mocks/app.states';
import {Observable} from 'rxjs';

describe('ChatRoomMessagesListComponent', () => {
  let component: ChatRoomMessagesListComponent;
  let fixture: ComponentFixture<ChatRoomMessagesListComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomMessagesListComponent ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
