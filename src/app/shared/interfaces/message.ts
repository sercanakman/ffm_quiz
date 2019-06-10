import {User} from './user';

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
