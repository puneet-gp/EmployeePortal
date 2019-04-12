import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpListComponent} from './controller/emp.list.component';
import {EmpRegistrationComponent} from './controller/emp.registration.component';

const routes: Routes = [
  {path: '', component: EmpListComponent},
  {path : 'employeeList', component: EmpListComponent},
  {path: 'employeeRegister', component: EmpRegistrationComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
