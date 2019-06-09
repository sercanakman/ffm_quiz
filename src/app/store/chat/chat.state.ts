import {User} from '../user/user.state';

export interface Message {
  chatroomId: number;
  id: number;
  name: string;
  email: string;
  body: string;
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
  activeChat: ChatRoom
  chatRooms: ChatRoom[];
}

export const initialState: State = {
  isLoaded: false,
  activeChat: null,
  chatRooms: []
};
