import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers;
  p = 1;
  term: any;
  constructor(
    private customerService: CustomerService,
    public dialog: MatDialog
  ) { }

  ngOnInit( ) {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    });
  }

  openDeleteDialog(id: number): void {
    this.customerService.getCustomerById(id).subscribe(next => {
      const dialogRef = this.dialog.open(CustomerDeleteComponent, {
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
