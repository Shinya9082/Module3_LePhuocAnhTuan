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


const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent },
  {path: 'employee-add', component: EmployeeAddComponent},
  { path: '', component: HomeComponent },
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
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent, EmployeeAddComponent, EmployeeDeleteComponent]
})
export class AppRoutingModule { }
