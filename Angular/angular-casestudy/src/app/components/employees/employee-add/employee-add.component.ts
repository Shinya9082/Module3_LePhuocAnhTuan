import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  public formAddNewEmployee: FormGroup;
  public maxDate = new Date();
  public minDate = new Date(1900, 0, 1);
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formAddNewEmployee = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      academyLevel: ['', [Validators.required]],
      group: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      identityNumber: ['', [Validators.required, Validators.pattern('^\\d{9}$')]],
      salary: ['', [Validators.required, Validators.pattern('^\\d+(?:\\.\\d)*$')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^(?:\\(84\\)\\+|0)9[01]\\d{7}$')]],
      address: ['', [Validators.required]]
    });
  }

  addEmployee() {
    this.employeeService.addNewEmployee(this.formAddNewEmployee.value).subscribe(data => {
          this.router.navigateByUrl('employee-list');
        });
  }
}
