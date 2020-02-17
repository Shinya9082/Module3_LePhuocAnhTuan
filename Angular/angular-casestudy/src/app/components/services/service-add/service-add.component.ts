import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../../services/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.scss']
})
export class ServiceAddComponent implements OnInit {
  public formAddNewService: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formAddNewService = this.formBuilder.group({
      name: ['', [Validators.required]],
      area: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      floor: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      maxPeople: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      price: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      rentType: ['', [Validators.required]],
      status: ['true', [Validators.required]]
    });
  }
  addService() {
    this.serviceService.addNewService(this.formAddNewService.value).subscribe(data => {
      this.router.navigateByUrl('service-list');
    });
  }
}
