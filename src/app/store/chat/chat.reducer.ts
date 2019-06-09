import {All, ChatActionTypes} from './chat.actions';
import {ChatRoom, initialState, State} from './chat.state';

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
      return state
    }
    case ChatActionTypes.CHAT_ROOM_LOAD_SUCCESS: {
      return {
        ...state,
        activeChat: action.payload
      };
    }
    case ChatActionTypes.CHAT_ROOM_LOAD_FAILURE: {
      return state;
    }
    case ChatActionTypes.CHAT_ROOM_MESSAGE_SEND: {
      const chatRooms = state.chatRooms.map((room: ChatRoom) => {
        if (room.id === action.payload.chatroomId) {
          room.messages.push(action.payload);
        }
        return room;
      });
      return {
        ...state,
        chatRooms,
      }
    }
    case ChatActionTypes.CHAT_ROOM_SETTING_CHANGE: {
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.property]: action.payload.value
        }
      }
    }
    default: {
      return state;
    }
  }
}
