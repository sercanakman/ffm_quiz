import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {metaReducers, reducers} from './store/app.states';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppEffects} from './store/app/app.effects';
import {ChatModule} from './modules/chat/chat.module';
import {environment} from '../environments/environment';
import {FontAwesomeModule} from './shared/modules/font-awesome.module';
import {ChatEffects} from './store/chat/chat.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffects, ChatEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !environment.production}),
    NgbModule,
    FontAwesomeModule,
    ChatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
