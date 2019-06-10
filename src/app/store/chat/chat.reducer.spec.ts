import {reducer} from './chat.reducer';
import {ChatRoomsLoad} from './chat.actions';
import {initialState as initialChatState} from './chat.state';

describe('chat.reducer', () => {
  it('ChatRoomsLoad should return the same state', () => {
    const newState = reducer(undefined, new ChatRoomsLoad());

    expect(newState).toEqual(initialChatState);
  });
});
