import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSettingsComponent } from './chat-settings.component';
import {FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../../../../shared/mocks/app.states';

describe('ChatSettingsComponent', () => {
  let component: ChatSettingsComponent;
  let fixture: ComponentFixture<ChatSettingsComponent>;
  let actions: Observable<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      providers: [
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
      declarations: [ ChatSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
