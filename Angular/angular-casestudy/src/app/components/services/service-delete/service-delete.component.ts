import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ServiceService} from '../../../services/service.service';

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.scss']
})
export class ServiceDeleteComponent implements OnInit {
  public serviceName: any;
  public serviceId;
  constructor(
    public dialogRef: MatDialogRef<ServiceDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.serviceName = this.data.data1.name + ' ' + this.data.data1.id;
    this.serviceId = this.data.data1.id;
  }

  deleteService() {
    this.serviceService.deleteServiceById(this.serviceId).subscribe(next => {
      this.dialogRef.close();
    });
  }
}
