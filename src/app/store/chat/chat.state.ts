import {ChatRoom} from '../../shared/interfaces/chat-room';
import {Settings} from '../../shared/interfaces/settings';


export interface State {
  isLoaded: boolean;
  activeChat: ChatRoom;
  chatRooms: ChatRoom[];
  /*
    total number of connected users to the system
    the count on the bottom of the rooms page indicate amount of total connected users
    not total the sum of users joined to each room
   */
  totalUsers: number;
  /*
    settings could be refactored into ChatSettingsModule if it is too extensive
    or that we want to leverage lazy loading
    then this would be seperated into its own store like chat as settings
   */
  settings: Settings;
  isSettingsOpen: boolean;
}

export const initialState: State = {
  isLoaded: false,
  activeChat: null,
  chatRooms: [],
  totalUsers: null,
  settings: {
    showNickname: true,
    fontSize: 16,
    /*
      in a live chat environment, you would not care about the date
      because you would be too busy trying to read flashingly fast messages
     */
    showTimestamps: false,
    /*
      this in real-world scenario, you would not want to expose IDs to your viewers
      this is just an example of a working example checkbox button
     */
    showIds: false,
  },
  isSettingsOpen: false,
};
