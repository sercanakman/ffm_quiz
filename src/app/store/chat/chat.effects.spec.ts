import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {cold, hot} from 'jasmine-marbles';
import {Observable} from 'rxjs';
import {ChatEffects} from './chat.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import * as ChatActions from './chat.actions';
import {provideMockStore} from '@ngrx/store/testing';
import {initialAppStates} from '../../shared/mocks/app.states';
import {ChatService} from '../../modules/chat/services/chat.service';
import {ChatRoom} from '../../shared/interfaces/chat-room';

describe('app.effects', () => {
  let effects: ChatEffects;
  let actions: Observable<any>;
  let chatService: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ChatEffects,
        ChatService,
        provideMockActions(() => actions),
        provideMockStore({initialState: initialAppStates})
      ],
    });

    effects = TestBed.get(ChatEffects);
    chatService = TestBed.get(ChatService);
  });

  afterEach(() => {
  });

  describe('instance', () => {
    it('should have been initialized', () => {
      expect(effects).toBeDefined();
    });
  });

  describe('ChatRoomsLoad', () => {
    it('should correctly return ChatRoomsLoadSuccess', () => {
      chatService.getChatRooms().subscribe((rooms: ChatRoom[]) => {
        const action = new ChatActions.ChatRoomsLoad();

        actions = hot('-a', {a: action});
        const expected = cold('-b', {
          b: new ChatActions.ChatRoomsLoadSuccess(rooms),
        });

        expect(effects.ChatRoomsLoad).toBeObservable(expected);
      })
    });
  });
});
