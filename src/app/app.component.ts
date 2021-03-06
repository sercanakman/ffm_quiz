import {Component, OnInit} from '@angular/core';
import {AppStates} from './store/app.states';
import {Store} from '@ngrx/store';
import {ChatService} from './modules/chat/services/chat.service';
import {AppLoad} from './store/app/app.actions';
import {User} from './shared/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ChatApp';

  constructor(
    private store: Store<AppStates>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new AppLoad());
  }
}
