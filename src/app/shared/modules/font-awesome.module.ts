import {NgModule} from '@angular/core';
import {FontAwesomeModule as OriginalFontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCogs} from '@fortawesome/free-solid-svg-icons/faCogs';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';

@NgModule({
  declarations: [],
  imports: [
    OriginalFontAwesomeModule,
  ],
  providers: [],
  exports: [OriginalFontAwesomeModule],
})
export class FontAwesomeModule {
  /* istanbul ignore next */
  constructor() {
    library.add(faUser);
    library.add(faCogs);
    library.add(faEye);
  }
}
