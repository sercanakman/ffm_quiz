import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomsComponent } from './chat-rooms.component';
import {ChatRoomCardComponent} from './components/chat-room-card/chat-room-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../../shared/mocks/app.states';
import {Observable} from 'rxjs';

describe('ChatRoomsComponent', () => {
  let component: ChatRoomsComponent;
  let fixture: ComponentFixture<ChatRoomsComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
      declarations: [ ChatRoomsComponent, ChatRoomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
