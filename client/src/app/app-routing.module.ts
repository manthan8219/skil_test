import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path : 'admin', component: AdminComponent},
  {path:'details',component:PersonComponent},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
