import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  public book;
  public bookId;

  constructor(
    public bookService: BookService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data.id;
      this.bookService.getBookById(this.bookId).subscribe(book => {
        this.book = book;
      });
    });
  }

  deleteBook() {
    if (confirm('Bạn có muốn xóa quyển sách ' + this.book.title + 'này')) {
      this.bookService.deleteBookById(this.bookId).subscribe(data => {
        this.router.navigateByUrl('book-list');
        alert('Đã xóa ' + this.book.title + 'thành công');
      });
    }
  }
}
