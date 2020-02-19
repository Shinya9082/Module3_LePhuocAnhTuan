import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public book;
  public bookId;

  constructor(
    public bookService: BookService,
    public activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data.id;
      this.bookService.getBookById(this.bookId).subscribe(data => {
        this.book = data;
      });
    });
  }

}
