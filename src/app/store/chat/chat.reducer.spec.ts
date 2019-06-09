import {reducer} from './chat.reducer';
import {ChatRoomLoad} from './chat.actions';

describe('app.reducer', () => {
  it('AppLoad correctly sets isLoaded to true', () => {
    const newState = reducer(undefined, new ChatRoomLoad());

    expect(newState.isLoaded).toBeTruthy();
  });
});
