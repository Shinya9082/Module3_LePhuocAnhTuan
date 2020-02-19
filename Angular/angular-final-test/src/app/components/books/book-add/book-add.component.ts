import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../../services/book.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  public formAddNewBook: FormGroup;
  public book;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formAddNewBook = this.formBuilder.group({
      title: [''],
      author: [''],
      description: [''],
    });
  }

  addBook() {
    this.bookService.addNewBook(this.formAddNewBook.value).subscribe(data => {
        this.router.navigateByUrl('book-list');
        alert('Đã thêm ' + this.formAddNewBook.value.title + ' thành công');
      });
    console.log(this.formAddNewBook);
  }
}
