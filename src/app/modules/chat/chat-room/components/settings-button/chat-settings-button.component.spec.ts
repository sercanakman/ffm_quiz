import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSettingsButtonComponent } from './chat-settings-button.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '../../../../../shared/modules/font-awesome.module';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../../../../shared/mocks/app.states';
import {Observable} from 'rxjs';

describe('ChatSettingsButtonComponent', () => {
  let component: ChatSettingsButtonComponent;
  let fixture: ComponentFixture<ChatSettingsButtonComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
      ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
      declarations: [ ChatSettingsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSettingsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
