import {reducer} from './app.reducer';
import {AppLoad} from './app.actions';
import {initialState as initialAppState} from './app.state';

describe('app.reducer', () => {
  it('AppLoad correctly sets isLoaded to true', () => {
    const newState = reducer(undefined, new AppLoad());

    expect(newState).toEqual(initialAppState);
  });
});
