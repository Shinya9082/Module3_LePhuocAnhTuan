import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {OrderDetailService} from '../../../services/order-detail.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-orders-detail-list',
  templateUrl: './orders-detail-list.component.html',
  styleUrls: ['./orders-detail-list.component.scss']
})
export class OrdersDetailListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'order', 'attachService', 'amount'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    public orderDetailService: OrderDetailService
  ) { }

  ngOnInit(): void {
    this.orderDetailService.getAllOrderDetail().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
