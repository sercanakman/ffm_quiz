import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomHeaderComponent } from './chat-room-header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FontAwesomeModule} from '../../../../../shared/modules/font-awesome.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState as initialChatState} from '../../../../../store/chat/chat.state';
import {Observable} from 'rxjs';

describe('ChatRoomHeaderComponent', () => {
  let component: ChatRoomHeaderComponent;
  let fixture: ComponentFixture<ChatRoomHeaderComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FontAwesomeModule, NgbModule],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialChatState})
      ],
      declarations: [ ChatRoomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
