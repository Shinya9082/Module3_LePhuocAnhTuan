import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service.service';
import {MatDialog} from '@angular/material/dialog';
import {ServiceDeleteComponent} from '../service-delete/service-delete.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  public services;
  p = 1;
  term: any;
  constructor(
    private serviceService: ServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit( ) {
    this.serviceService.getAllService().subscribe(data => {
      this.services = data;
    });
  }

  openDeleteDialog(id: number) {
    this.serviceService.getServiceById(id).subscribe(next => {
      const dialogRef = this.dialog.open(ServiceDeleteComponent, {
        width: '500px',
        data: {data1: next},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
}
