import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppStates, metaReducers, reducers} from '../app.states';
import {initialState as initialAppState, State as AppState} from './app.state';
import {provideMockStore} from '@ngrx/store/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

describe('AppState', () => {
  let store: Store<AppStates>;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, {metaReducers}),
      ],
    });
    store = TestBed.get(Store);
  });

  afterEach(() => {
    // Cleanup
  });

  describe('instance', () => {
    it('should have been initialized', () => {
      expect(store).toBeDefined();
    });
  });

  describe('store', () => {
    it('should have app key', () => {
      expect(store.select('app')).toBeDefined();
    });
  });

  describe('AppStore', () => {
    it('should have app key with initialState', (done) => {
      const appStore = store.select('app');
      appStore.subscribe((state: AppState) => {
        expect(state).toEqual(initialAppState);
        done();
      });
    });
  });

});
