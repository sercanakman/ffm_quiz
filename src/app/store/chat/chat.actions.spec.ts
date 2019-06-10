import {ChatActionTypes, ChatRoomsLoad} from './chat.actions';

describe('chat.actions', () => {
  describe('ChatRoomsLoad', () => {
    it('should create an action', () => {
      const action = new ChatRoomsLoad();
      expect({...action}).toEqual({type: ChatActionTypes.CHAT_ROOMS_LOAD});
    });
  });
});
