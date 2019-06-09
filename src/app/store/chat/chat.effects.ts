import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {
  ChatActionTypes,
  ChatRoomLoad,
  ChatRoomLoadFailure,
  ChatRoomLoadSuccess,
  ChatRoomsLoad, ChatRoomsLoadFailure,
  ChatRoomsLoadSuccess
} from './chat.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {ChatService} from '../../modules/chat/services/chat.service';
import {ChatRoom} from './chat.state';

@Injectable()
export class ChatEffects {

  constructor(
    private actions: Actions,
    private chatService: ChatService,
  ) {
  }

  @Effect()
  ChatRoomsLoad: Observable<any> = this.actions.pipe(
    ofType(ChatActionTypes.CHAT_ROOMS_LOAD),
    switchMap(() => this.chatService.getChatRooms()
      .pipe(
        map((chats: ChatRoom[]) => new ChatRoomsLoadSuccess(chats)),
        catchError((error) => of(new ChatRoomsLoadFailure(error)))
      )
    ),
  );

  @Effect()
  ChatRoomLoad: Observable<any> = this.actions.pipe(
    ofType(ChatActionTypes.CHAT_ROOM_LOAD),
    map((action: ChatRoomLoad) => action.payload),
    switchMap((chatroomId: number) => this.chatService.getChatRoom(chatroomId)
      .pipe(
        map((chat: ChatRoom) => new ChatRoomLoadSuccess(chat)),
        catchError((error) => of(new ChatRoomLoadFailure(error)))
      )
    ),
  );
}
