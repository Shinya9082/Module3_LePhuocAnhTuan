import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit {
  public customerFullName: any;
  public customerId;
  constructor(
    public dialogRef: MatDialogRef<CustomerDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerFullName = this.data.data1.fullName;
    this.customerId = this.data.data1.id;
  }

  deleteCustomer() {
    this.customerService.deleteCustomerById(this.customerId).subscribe(next => {
      this.dialogRef.close();
    });
  }
}
