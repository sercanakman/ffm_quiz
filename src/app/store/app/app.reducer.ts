import {All, AppActionTypes} from './app.actions';
import {initialState, State} from './app.state';

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AppActionTypes.APP_LOAD: {
      return initialState;
    }
    case AppActionTypes.USER_LOAD: {
      return {
        ...state,
        user: action.payload
      }
    }
    case AppActionTypes.APP_TAB_CHANGE: {
      return {
        ...state,
        activeTab: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
