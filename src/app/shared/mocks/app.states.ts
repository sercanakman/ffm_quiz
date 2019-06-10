import {AppStates} from '../../store/app.states';
import {initialState as initialAppState} from '../../store/app/app.state';
import {initialState as initialChatState} from '../../store/chat/chat.state';

export const initialAppStates: AppStates = {
  app: initialAppState,
  chat: initialChatState,
};
