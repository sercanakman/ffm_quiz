import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUserListComponent } from './chat-user-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '../../../../../shared/modules/font-awesome.module';
import {ChatEffects} from '../../../../../store/chat/chat.effects';
import {ChatService} from '../../../services/chat.service';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../../../../shared/mocks/app.states';
import {Observable} from 'rxjs';

describe('ChatUserListComponent', () => {
  let component: ChatUserListComponent;
  let fixture: ComponentFixture<ChatUserListComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule,
        FontAwesomeModule,
      ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
      declarations: [ ChatUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
