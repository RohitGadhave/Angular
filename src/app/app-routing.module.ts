import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:"userlist",
    component:UserListComponent
  },
  {
    path:"adduser",
    component:AddUserComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:"userlist"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
