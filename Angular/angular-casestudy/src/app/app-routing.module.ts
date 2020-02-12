import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';


const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent },
  { path: '', component: HomeComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent]
})
export class AppRoutingModule { }
