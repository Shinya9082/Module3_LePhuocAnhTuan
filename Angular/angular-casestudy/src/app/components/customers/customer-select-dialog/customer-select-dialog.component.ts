import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../../services/customer.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customer-select-dialog',
  templateUrl: './customer-select-dialog.component.html',
  styleUrls: ['./customer-select-dialog.component.scss']
})
export class CustomerSelectDialogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'choose'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public customerService: CustomerService,
    public dialogRef: MatDialogRef<CustomerSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
