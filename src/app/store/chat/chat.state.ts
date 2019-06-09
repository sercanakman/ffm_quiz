import {User} from '../user/user.state';

export enum SETTINGS_PROPERTIES {
  ShowNickname = 'showNickname',
  FontSize = 'fontSize',
  ShowTimestamps = 'showTimestamps',
  ShowIds = 'showIds',
}

export interface Settings {
  showNickname: boolean;
  fontSize: number;
  showTimestamps: boolean;
  showIds: boolean;
}


export interface Message {
  chatroomId: number;
  id: number;
  userId?: number;
  user?: User;
  name: string;
  email: string;
  body: string;
  timestamps?: Date;
}

export interface ChatRoom {
  id: number;
  userId: number;
  title: string;
  body: string;
  users?: User[];
  messages?: Message[];
}

export interface State {
  isLoaded: boolean;
  activeChat: ChatRoom;
  chatRooms: ChatRoom[];
  settings: Settings;
}

export const initialState: State = {
  isLoaded: false,
  activeChat: null,
  chatRooms: [],
  settings: {
    showNickname: true,
    fontSize: 16,
    showTimestamps: false,
    showIds: false,
  }
};
