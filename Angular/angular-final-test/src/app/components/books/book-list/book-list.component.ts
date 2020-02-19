import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {BookService} from '../../../services/book.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'action'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  amount: any;

  constructor(
    public bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.amount = this.dataSource._data.value.length;
    });
  }
}
