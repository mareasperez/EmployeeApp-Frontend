import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DepartamentComponent } from 'src/app/components/departament/departament.component'
import { EmployeeComponent } from 'src/app/components/employee/employee.component'
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'departament', component: DepartamentComponent },
  { path: 'employee', component: EmployeeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
