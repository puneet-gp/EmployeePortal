import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmpListComponent} from './controller/emp.list.component';
import {InputTextModule, FieldsetModule, RadioButtonModule, CalendarModule} from 'primeng/primeng';
import {EmpRegistrationComponent} from './controller/emp.registration.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InputTextModule,
    FieldsetModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RadioButtonModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
