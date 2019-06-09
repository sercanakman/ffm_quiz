import {User} from '../user/user.state';

export enum NAVIGATION_TABS {
  UserList = 'user-list',
  Settings = 'settings',
}

export interface State {
  isLoaded: boolean;
  user: User;
  activeTab: NAVIGATION_TABS;
}

export const initialState: State = {
  isLoaded: false,
  user: null,
  activeTab: NAVIGATION_TABS.UserList
};
