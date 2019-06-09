import {Action} from '@ngrx/store';
import {NAVIGATION_TABS} from './app.state';

export enum AppActionTypes {
  APP_LOAD = '[App] App Load',
  APP_TAB_CHANGE = '[App] App Tab Change',
}

export class AppLoad implements Action {
  readonly type = AppActionTypes.APP_LOAD;

  constructor() {
  }
}

export class AppTabChange implements Action {
  readonly type = AppActionTypes.APP_TAB_CHANGE;
  constructor(public payload: NAVIGATION_TABS) {
  }
}

export type All =
  | AppLoad
  | AppTabChange;
