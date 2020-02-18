import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public ordersAll;
  public orders = [];
  public today = new Date();
  p: 1;

  constructor(
    public orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe(data => {
      this.ordersAll = data;
    },null,
      ()=>{
        for (const obj of this.ordersAll) {
          let date = new Date(obj.dateEnd);
          if (date >= this.today) {
            this.orders.push(obj);
          }
        }
      });
  }

}
