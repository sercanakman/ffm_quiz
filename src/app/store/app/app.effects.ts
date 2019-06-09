import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {AppActionTypes, UserLoad} from './app.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {ChatService} from '../../modules/chat/services/chat.service';
import {User} from '../user/user.state';

@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions,
    private chatService: ChatService,
  ) {
  }

  @Effect()
  AppLoad: Observable<any> = this.actions.pipe(
    ofType(AppActionTypes.APP_LOAD),
    switchMap(() => this.chatService.getCurrentUser()
      .pipe(
        map((user: User) => new UserLoad(user)),
      )

    )
  );
}
