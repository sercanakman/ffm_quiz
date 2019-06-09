import {ActionReducerMap, createFeatureSelector, MetaReducer} from '@ngrx/store';

import {State as AppState} from './app/app.state';
import {reducer as AppReducer} from './app/app.reducer';

import {State as ChatState} from './chat/chat.state';
import {reducer as ChatReducer} from './chat/chat.reducer';


export interface AppStates {
  app: AppState;
  chat: ChatState
}

export const reducers: ActionReducerMap<AppStates> = {
  app: AppReducer,
  chat: ChatReducer,
};

export const metaReducers: MetaReducer<AppStates>[] = [];

export const selectAppState = createFeatureSelector<AppState>('app');
export const selectChatState = createFeatureSelector<ChatState>('chat');
