import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderDetailService} from '../../../services/order-detail.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {OrderSelectDialogComponent} from '../../orders/order-select-dialog/order-select-dialog.component';


export interface OrdersDetail {
  id: number;
  name: string;
  price: number;
  amount: number;
  status: boolean;
}
const ordersDetailList: OrdersDetail[] = [
  {id: 1, name: 'massage', price: 20, amount: 1, status: true},
  {id: 2, name: 'karaoke', price: 25, amount: 2, status: true},
  {id: 3, name: 'food', price: 10, amount: 3, status: true},
  {id: 4, name: 'water', price: 5, amount: 4, status: true},
  {id: 5, name: 'car', price: 30, amount: 5, status: true},
];


@Component({
  selector: 'app-orders-detail-add',
  templateUrl: './orders-detail-add.component.html',
  styleUrls: ['./orders-detail-add.component.scss']
})
export class OrdersDetailAddComponent implements OnInit {
  public formAddNewOrderDetail: FormGroup;
  public order;
  ordersDetailList = ordersDetailList;
  constructor(
    private formBuilder: FormBuilder,
    private orderDetailService: OrderDetailService,
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formAddNewOrderDetail = this.formBuilder.group({
      order: ['', [Validators.required]],
      attachService: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern('^\\d+$')]],
    });
  }

  openOrderDialog(): void {
    const dialogRef = this.dialog.open(OrderSelectDialogComponent, {
      width: '60%',
      position: {top: '10%'},
      data: {order: this.order}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.order = result;
        this.formAddNewOrderDetail.controls.order.setValue(this.order);
      }
    });
  }

  addOrder() {
    this.orderDetailService.addNewOrderDetail(this.formAddNewOrderDetail.value).subscribe(data => {
      this.router.navigateByUrl('order-detail-list');
    });
  }
}
