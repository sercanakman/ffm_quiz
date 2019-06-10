import {Action} from '@ngrx/store';
import {Message} from '../../shared/interfaces/message';
import {ChatRoom} from '../../shared/interfaces/chat-room';
import {SETTINGS_PROPERTIES} from '../../shared/interfaces/settings';

export enum ChatActionTypes {
  CHAT_ROOMS_LOAD = '[Chat] Chat Rooms Load',
  CHAT_ROOMS_LOAD_SUCCESS = '[Chat] Chat Rooms Load Success',
  CHAT_ROOMS_LOAD_FAILURE = '[Chat] Chat Rooms Load Failure',
  CHAT_ROOM_LOAD = '[Chat] Chat Room Load',
  CHAT_ROOM_LOAD_SUCCESS = '[Chat] Chat Room Load Success',
  CHAT_ROOM_LOAD_FAILURE = '[Chat] Chat Room Load Failure',
  CHAT_ROOM_MESSAGE_SEND = '[Chat] Chat Room Message Send',
  CHAT_ROOM_SETTINGS_TOGGLED = '[Chat] Chat Room Settings Toggled',
  CHAT_ROOM_SETTING_CHANGE = '[Chat] Chat Room Setting Change',
}

export class ChatRoomsLoad implements Action {
  readonly type = ChatActionTypes.CHAT_ROOMS_LOAD;
}

export class ChatRoomsLoadSuccess implements Action {
  readonly type = ChatActionTypes.CHAT_ROOMS_LOAD_SUCCESS;

  constructor(public payload: ChatRoom[]) {
  }
}

export class ChatRoomsLoadFailure implements Action {
  readonly type = ChatActionTypes.CHAT_ROOMS_LOAD_FAILURE;

  /*
    in a real world scenario, you would want to handle your errors but here it is just a boilerplate
    to follow best practices
   */
  constructor(public payload: any) {
  }
}

export class ChatRoomLoad implements Action {
  readonly type = ChatActionTypes.CHAT_ROOM_LOAD;

  constructor(public payload: number) {
  }
}

export class ChatRoomLoadSuccess implements Action {
  readonly type = ChatActionTypes.CHAT_ROOM_LOAD_SUCCESS;

  constructor(public payload: {chatRooms: ChatRoom[], activeChat: ChatRoom}) {
  }
}

export class ChatRoomLoadFailure implements Action {
  readonly type = ChatActionTypes.CHAT_ROOM_LOAD_FAILURE;

  /*
    in a real world scenario, you would want to handle your errors but here it is just a boilerplate
    to follow best practices
   */
  constructor(public payload: any) {
  }
}

export class ChatRoomMessageSend implements Action {
  readonly type = ChatActionTypes.CHAT_ROOM_MESSAGE_SEND;

  constructor(public payload: Message){
  }
}

export class ChatRoomSettingsToggled implements Action {
  readonly type = ChatActionTypes.CHAT_ROOM_SETTINGS_TOGGLED;

  constructor(){
  }
}

export class ChatRoomSettingChange implements Action {
  readonly type = ChatActionTypes.CHAT_ROOM_SETTING_CHANGE;

  constructor(public payload: {property: SETTINGS_PROPERTIES, value: any}) {
  }
}


export type All =
  | ChatRoomsLoad
  | ChatRoomsLoadSuccess
  | ChatRoomsLoadFailure
  | ChatRoomLoad
  | ChatRoomLoadSuccess
  | ChatRoomLoadFailure
  | ChatRoomMessageSend
  | ChatRoomSettingsToggled
  | ChatRoomSettingChange;
