import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ToppersTableComponent } from './toppers-table/toppers-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { WinnersTableComponent } from './winners-table/winners-table.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"user",
    pathMatch: "full"
  },
  {
    path: "addUser",
    component:AddUserComponent
  },
  {
    path:"user" ,
   component:UserTableComponent
  },
  {
    path:"winner" ,
    component:WinnersTableComponent
  },
  {
    path:"topper",
    component:ToppersTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
