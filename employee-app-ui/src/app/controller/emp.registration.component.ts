import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from "../model/employe.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-emp-registration',
  templateUrl: '../view/emp.registration.view.html'
})
export class EmpRegistrationComponent {

  employee: Employee = new Employee();

  onEmployeeSave(empForm) {

  }

}
