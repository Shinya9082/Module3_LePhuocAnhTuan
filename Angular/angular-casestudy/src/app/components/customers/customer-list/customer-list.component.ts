import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {MatDialog} from '@angular/material/dialog';

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

  openDeleteDialog(id: any) {
  }
}
