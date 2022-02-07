import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"create",component:CreateaccountComponent},
  {path:"editemployee",component:EditemployeeComponent},
  {path:"addemployee",component:AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
