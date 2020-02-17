import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../../services/order.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {CustomerService} from '../../../services/customer.service';
import {ServiceService} from '../../../services/service.service';
import {EmployeeSelectDialogComponent} from '../../employees/employee-select-dialog/employee-select-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CustomerSelectDialogComponent} from '../../customers/customer-select-dialog/customer-select-dialog.component';
import {ServiceSelectDialogComponent} from '../../services/service-select-dialog/service-select-dialog.component';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {
  public formAddNewOrder: FormGroup;
  public order;
  public employee: any;
  public customer: any;
  public service;
  public minDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private employeeService: EmployeeService,
    private customerService: CustomerService,
    private serviceService: ServiceService,
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formAddNewOrder = this.formBuilder.group({
      employee: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      service: ['', [Validators.required]],
      dateStart: ['', [Validators.required]],
      dateEnd: ['', [Validators.required]],
      deposits: ['', [Validators.required]],
      total: ['', [Validators.required]]
    });
  }

  openEmployeeDialog(): void {
    const dialogRef = this.dialog.open(EmployeeSelectDialogComponent, {
      width: '50%',
      position: {top: '10%'},
      data: {employee: this.employee}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employee = result;
        this.formAddNewOrder.controls.employee.errors.required = false;
      }
      this.formAddNewOrder.value.employee = this.employee;
      console.log(this.employee);
    });
  }

  openCustomerDialog(): void {
    const dialogRef = this.dialog.open(CustomerSelectDialogComponent, {
      width: '50%',
      position: {top: '10%'},
      data: {employee: this.customer}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customer = result;
        this.formAddNewOrder.controls.customer.errors.required = false;
      }
      this.formAddNewOrder.value.customer = this.customer;
    });
  }

  openServiceDialog(): void {
    const dialogRef = this.dialog.open(ServiceSelectDialogComponent, {
      width: '50%',
      position: {top: '10%'},
      data: {employee: this.service}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service = result;
        this.formAddNewOrder.controls.service.errors.required = false;
      }
      this.formAddNewOrder.value.service = this.service;
      console.log(this.service);
    });
  }
}
