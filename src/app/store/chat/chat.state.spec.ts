import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppStates, metaReducers, reducers, selectChatState} from '../app.states';
import {initialState as initialChatState, State as ChatState} from './chat.state';
import {provideMockStore} from '@ngrx/store/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

describe('ChatState', () => {
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
    it('should have chat key', () => {
      expect(store.select(selectChatState)).toBeDefined();
    });
  });

  describe('ChatStore', () => {
    it('should have chat key with initialState', (done) => {
      const chatStore = store.select(selectChatState);
      chatStore.subscribe((state: ChatState) => {
        console.log('stat', state);
        expect(state).toEqual(initialChatState);
        done();
      });
    });
  });

});
