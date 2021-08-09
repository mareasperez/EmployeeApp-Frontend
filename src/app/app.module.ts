import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DepartamentComponent } from './components/departament/departament.component';
import { EmployeeeComponent } from './components/employeee/employeee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartamentComponent,
    EmployeeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
