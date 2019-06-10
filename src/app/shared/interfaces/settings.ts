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
