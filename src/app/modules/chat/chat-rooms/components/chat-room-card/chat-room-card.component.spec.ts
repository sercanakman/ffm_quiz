import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomCardComponent } from './chat-room-card.component';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../../../../shared/mocks/app.states';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';

describe('ChatRoomCardComponent', () => {
  let component: ChatRoomCardComponent;
  let fixture: ComponentFixture<ChatRoomCardComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
      declarations: [ ChatRoomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
