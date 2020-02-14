import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {
  public employeeFullName: any;
  public employeeId;
  constructor(
    public dialogRef: MatDialogRef<EmployeeDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public employeeService: EmployeeService
    ) {}

  ngOnInit(): void {
    this.employeeFullName = this.data.data1.fullName;
    this.employeeId = this.data.data1.id;
  }

  deleteEmployee() {
    this.employeeService.deleteEmployeeById(this.employeeId).subscribe(next => {
      this.dialogRef.close();
    });
  }
}
