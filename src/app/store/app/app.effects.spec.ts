import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {cold, hot} from 'jasmine-marbles';
import {Observable} from 'rxjs';
import {AppEffects} from './app.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import * as AppActions from './app.actions';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../shared/mocks/app.states';

describe('app.effects', () => {
  let effects: AppEffects;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppEffects,
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
    });

    effects = TestBed.get(AppEffects);
  });

  afterEach(() => {
  });

  describe('instance', () => {
    it('should have been initialized', () => {
      expect(effects).toBeDefined();
    });
  });

  describe('ngOnInit', () => {

  });
});
