import {TestBed} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {AppStates} from '../app.states';
import {initialState as initialAppState, State as AppState} from './app.state';
import {provideMockStore} from '@ngrx/store/testing';

describe('AppState', () => {
  let store: Store<AppStates>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideMockStore({initialState: initialAppState})
      ],
      providers: []
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
