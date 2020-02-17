import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-employee-select-dialog',
  templateUrl: './employee-select-dialog.component.html',
  styleUrls: ['./employee-select-dialog.component.scss']
})
export class EmployeeSelectDialogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'choose'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
