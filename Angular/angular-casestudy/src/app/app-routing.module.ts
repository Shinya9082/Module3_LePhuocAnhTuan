import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import {CommonModule} from '@angular/common';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeeAddComponent } from './components/employees/employee-add/employee-add.component';
import {MaterialModule} from './material.module';
import { EmployeeDeleteComponent } from './components/employees/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrdersDetailListComponent } from './components/oders-detail/orders-detail-list/orders-detail-list.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import {ChangeIdPipe} from './pipes/changeIdPipe';
import {ChangePhoneNumberPipe} from './pipes/changePhoneNumberPipe';
import { CustomerAddComponent } from './components/customers/customer-add/customer-add.component';
import { CustomerDeleteComponent } from './components/customers/customer-delete/customer-delete.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';
import {ChangeRentTypePipe} from './pipes/changeRentType';


const routes: Routes = [
  {path: 'employee-list', component: EmployeeListComponent },
  {path: 'employee-add', component: EmployeeAddComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'order-detail-list', component: OrdersDetailListComponent},
  {path: 'service-list', component: ServiceListComponent},
  {path: 'service-add', component: ServiceListComponent},
  {path: 'service-edit/:id', component: ServiceListComponent},
  {path: '', component: HomeComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    CustomerListComponent,
    OrderListComponent,
    OrdersDetailListComponent,
    ServiceListComponent,
    ChangeIdPipe,
    ChangePhoneNumberPipe,
    ChangeRentTypePipe,
    CustomerAddComponent,
    CustomerDeleteComponent,
    CustomerEditComponent
  ]
})
export class AppRoutingModule { }
