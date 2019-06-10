import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*
    The chat module is lazy loaded but as there are not any other modules
    this functionality is not leveraged
   */
  {
    path: 'chat',
    loadChildren: './modules/chat/chat.module#ChatModule'
  },
  /*
    here would be a UserModule to handle user related stuff like login
    or it can also be named AuthModule
   */
/*  {
    path: '',
    loadChildren: './modules/user/user.module#UserModule'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
