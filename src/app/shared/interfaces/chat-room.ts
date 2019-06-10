import {User} from './user';
import {Message} from './message';

export interface ChatRoom {
  id: number;
  userId: number;
  title: string;
  body: string;
  users?: User[];
  messages?: Message[];
}
