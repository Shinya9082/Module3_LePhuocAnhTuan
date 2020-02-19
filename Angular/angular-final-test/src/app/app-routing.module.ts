import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BookListComponent} from './components/books/book-list/book-list.component';
import {BookAddComponent} from './components/books/book-add/book-add.component';
import {BookViewComponent} from './components/books/book-view/book-view.component';
import {BookEditComponent} from './components/books/book-edit/book-edit.component';
import {BookDeleteComponent} from './components/books/book-delete/book-delete.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'book-add', component: BookAddComponent},
  {path: 'book-view/:id', component: BookViewComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [HomeComponent,
    PageNotFoundComponent,
    BookListComponent,
    BookAddComponent,
    BookViewComponent,
    BookEditComponent,
    BookDeleteComponent]
})
export class AppRoutingModule {
}
