import {All, ChatActionTypes} from './chat.actions';
import {initialState, State} from './chat.state';

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case ChatActionTypes.CHAT_ROOMS_LOAD: {
      return state;
    }
    case ChatActionTypes.CHAT_ROOMS_LOAD_SUCCESS: {
      return {
        ...state,
        chatRooms: action.payload
      }
    }
    case ChatActionTypes.CHAT_ROOM_LOAD_FAILURE: {
      return state;
    }
    case ChatActionTypes.CHAT_ROOM_LOAD: {
      return state;
    }
    case ChatActionTypes.CHAT_ROOM_LOAD_SUCCESS: {
      return {
        ...state,
        activeChat: action.payload,
      }
    }
    case ChatActionTypes.CHAT_ROOM_LOAD_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
