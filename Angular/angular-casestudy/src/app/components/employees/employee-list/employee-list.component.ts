import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';

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
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) { }

  ngOnInit( ) {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  openDeleteDialog(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(next => {
      const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
        width: '500px',
        data: {data1: next},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
