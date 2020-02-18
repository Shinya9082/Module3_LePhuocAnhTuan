import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  public formAddNewCustomer: FormGroup;
  public maxDate = new Date();
  public minDate = new Date(1900, 0, 1);
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formAddNewCustomer = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      type: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      identityNumber: ['', [Validators.required, Validators.pattern('^\\d{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^(?:\\(84\\)\\+|0)9[01]\\d{7}$')]],
      address: ['', [Validators.required]]
    });
  }

  addCustomer() {
    this.customerService.addNewCustomer(this.formAddNewCustomer.value).subscribe(data => {
          this.router.navigateByUrl('customer-list');
        });
  }
}
