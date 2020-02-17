import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public orders;
  p: 1;
  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe(data => {
      this.orders = data;
    });
  }

}
