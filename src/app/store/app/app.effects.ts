import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions,
  ) {
  }

  /*@Effect()
  AppLoad: Observable<any> = this.actions.pipe(
    ofType(AppActionTypes.APP_LOAD),
    map(() => this.authenticationService.hasAuthorization()),
    mergeMap((hasAuthorization: boolean) => {
        let actions = [];
        if (hasAuthorization) {
          actions = [new WalletSetup(), new UserSetup()];
        } else {
          actions = [new WalletCleanup(), new UserCleanup()];
        }

        return actions;
      }
    )
  );*/
}
