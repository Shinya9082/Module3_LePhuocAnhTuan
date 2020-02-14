import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  public formEditCustomer: FormGroup;
  public maxDate = new Date();
  public minDate = new Date(1900, 0, 1);
  public customerId;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formEditCustomer = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      type: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      identityNumber: ['', [Validators.required, Validators.pattern('^\\d{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^(?:\\(84\\)\\+|0)9[01]\\d{7}$')]],
      address: ['', [Validators.required]]
    });
    this.activatedRoute.params.subscribe(data => {
      this.customerId = data.id;
      this.customerService.getCustomerById(this.customerId).subscribe(data => {
        this.formEditCustomer.patchValue(data);
      })
    })
  }

  editCustomer() {
    this.customerService.editCustomer(this.formEditCustomer.value,this.customerId).subscribe(data =>{
      this.router.navigateByUrl('customer-list')
    });
  }
}
