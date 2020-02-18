import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {OrderService} from '../../../services/order.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-order-select-dialog',
  templateUrl: './order-select-dialog.component.html',
  styleUrls: ['./order-select-dialog.component.scss']
})
export class OrderSelectDialogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dateStart', 'dateEnd', 'choose'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public orderService: OrderService,
    public dialogRef: MatDialogRef<OrderSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
