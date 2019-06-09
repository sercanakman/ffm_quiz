export enum NAVIGATION_TABS {
  UserList = 'user-list',
  Settings = 'settings',
}

export interface State {
  isLoaded: boolean;
  activeTab: NAVIGATION_TABS;
}

export const initialState: State = {
  isLoaded: false,
  activeTab: NAVIGATION_TABS.UserList
};
