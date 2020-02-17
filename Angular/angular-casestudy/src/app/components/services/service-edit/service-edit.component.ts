import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.scss']
})
export class ServiceEditComponent implements OnInit {
  public formEditService: FormGroup;
  public serviceId;
  constructor(
    private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formEditService = this.formBuilder.group({
      name: ['', [Validators.required]],
      area: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      floor: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      maxPeople: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      price: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      rentType: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
    this.activatedRoute.params.subscribe(data => {
      this.serviceId = data.id;
      this.serviceService.getServiceById(this.serviceId).subscribe(data => {
        this.formEditService.patchValue(data);
      })
    })
  }
  editService() {
    this.serviceService.editService(this.formEditService.value, this.serviceId ).subscribe(data => {
      this.router.navigateByUrl('service-list');
    });
  }
}
