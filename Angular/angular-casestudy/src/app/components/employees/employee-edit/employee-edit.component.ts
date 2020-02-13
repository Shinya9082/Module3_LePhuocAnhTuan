import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  public formEditNewEmployee: FormGroup;
  public maxDate = new Date();
  public minDate = new Date(1900, 0, 1);
  public employeeId;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formEditNewEmployee = this.formBuilder.group({
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
    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
        this.formEditNewEmployee.patchValue(data);
      })
    })
  }

  editEmployee() {
    this.employeeService.editEmployee(this.formEditNewEmployee.value,this.employeeId).subscribe(data =>{
      this.router.navigateByUrl('employee-list')
    });
  }
}
