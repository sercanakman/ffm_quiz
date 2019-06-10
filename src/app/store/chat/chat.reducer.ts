import {All, ChatActionTypes} from './chat.actions';
import {initialState, State} from './chat.state';
import {users} from '../../shared/mocks/users';
import {ChatRoom} from '../../shared/interfaces/chat-room';

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case ChatActionTypes.CHAT_ROOMS_LOAD: {
      return state;
    }
    case ChatActionTypes.CHAT_ROOMS_LOAD_SUCCESS: {
      return {
        ...state,
        chatRooms: action.payload,
        totalUsers: users.length
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
        chatRooms: action.payload.chatRooms,
        totalUsers: users.length,
        activeChat: action.payload.activeChat
      };
    }
    case ChatActionTypes.CHAT_ROOM_LOAD_FAILURE: {
      return state;
    }
    case ChatActionTypes.CHAT_ROOM_MESSAGE_SEND: {

      /*
        this block appends the current message to the previous message
        if their owners are the same
        to merge messages into one Card block to make it look like Chat Bubble
       */
      const chatRooms = state.chatRooms.map((room: ChatRoom) => {
        if (room.id === action.payload.chatroomId) {
          const previousMessage = room.messages[room.messages.length - 1];
          if (previousMessage && previousMessage.userId === action.payload.userId) {
            previousMessage.body += `\n${action.payload.body}`;
          } else {
            room.messages.push(action.payload);
          }
        }
        return room;
      });


      return {
        ...state,
        chatRooms,
      }
    }
    case ChatActionTypes.CHAT_ROOM_SETTINGS_TOGGLED: {
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen
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
