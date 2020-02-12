import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees;
  p: number = 1;
  term: any;
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit( ) {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }
}
