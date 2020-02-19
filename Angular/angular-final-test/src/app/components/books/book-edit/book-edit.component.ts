import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  public formEditBook: FormGroup;
  public bookId;
  public bookTitle;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formEditBook = this.formBuilder.group({
      title: [''],
      author: [''],
      description: [''],
    });
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data.id;
      this.bookService.getBookById(this.bookId).subscribe(book => {
        this.formEditBook.patchValue(book);
        this.bookTitle = this.formEditBook.value.title;
      });
    });
  }

  editBook() {
    this.bookService.editBook(this.formEditBook.value, this.bookId).subscribe(data => {
      this.router.navigateByUrl('book-list');
      alert('Đã cập nhật sách' + this.bookTitle + ' thành công');
    });
  }
}
