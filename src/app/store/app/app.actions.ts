import {Action} from '@ngrx/store';
import {NAVIGATION_TABS} from './app.state';
import {User} from '../user/user.state';

export enum AppActionTypes {
  APP_LOAD = '[App] App Load',
  USER_LOAD = '[App] User Load',
  APP_TAB_CHANGE = '[App] App Tab Change',
}

export class AppLoad implements Action {
  readonly type = AppActionTypes.APP_LOAD;

  constructor() {
  }
}

export class UserLoad implements Action {
  readonly type = AppActionTypes.USER_LOAD;

  constructor(public payload: User) {
  }
}

export class AppTabChange implements Action {
  readonly type = AppActionTypes.APP_TAB_CHANGE;
  constructor(public payload: NAVIGATION_TABS) {
  }
}

export type All =
  | AppLoad
  | UserLoad
  | AppTabChange;
