import {Action} from '@ngrx/store';
import {ChatRoom} from './chat.state';

export enum ChatActionTypes {
  CHAT_ROOMS_LOAD = '[Chat] Chat Rooms Load',
  CHAT_ROOMS_LOAD_SUCCESS = '[Chat] Chat Rooms Load Success',
  CHAT_ROOMS_LOAD_FAILURE = '[Chat] Chat Rooms Load Failure',
  CHAT_ROOM_LOAD = '[Chat] Chat Room Load',
  CHAT_ROOM_LOAD_SUCCESS = '[Chat] Chat Room Load Success',
  CHAT_ROOM_LOAD_FAILURE = '[Chat] Chat Room Load Failure',
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

  constructor(public payload: ChatRoom) {
  }
}

export class ChatRoomLoadFailure implements Action {
  readonly type = ChatActionTypes.CHAT_ROOM_LOAD_FAILURE;

  constructor(public payload: any) {
  }
}


export type All =
  | ChatRoomsLoad
  | ChatRoomsLoadSuccess
  | ChatRoomsLoadFailure
  | ChatRoomLoad
  | ChatRoomLoadSuccess
  | ChatRoomLoadFailure;
