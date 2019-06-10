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
import {ChatRoom} from '../../shared/interfaces/chat-room';

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
        /*
          in a real world scenario, you would want to handle your errors but here it is just a boilerplate
          to follow best practices
         */
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
        /*
          in a real world scenario, you would fetch meta data of all chat rooms if user first hits
          the homepage (rooms list). if the user enters a specific room you would fetch its complete data
          like complete list of users and messages
          this below code would only require setting the ChatRoom that is returned from the response of getChatRoom
          the current code only exists to make it simulate that behaviour (passing of
          current chatRooms, not only the activeChat)
         */
        map((data: {chatRooms: ChatRoom[], activeChat: ChatRoom}) => new ChatRoomLoadSuccess(data)),
        /*
          in a real world scenario, you would want to handle your errors but here it is just a boilerplate
          to follow best practices
         */
        catchError((error) => of(new ChatRoomLoadFailure(error)))
      )
    ),
  );
}
