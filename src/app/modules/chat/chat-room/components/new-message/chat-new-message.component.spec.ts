import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNewMessageComponent } from './chat-new-message.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '../../../../../shared/modules/font-awesome.module';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../../../../shared/mocks/app.states';
import {Observable} from 'rxjs';

describe('ChatNewMessageComponent', () => {
  let component: ChatNewMessageComponent;
  let fixture: ComponentFixture<ChatNewMessageComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FontAwesomeModule,
      ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
      declarations: [ ChatNewMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
