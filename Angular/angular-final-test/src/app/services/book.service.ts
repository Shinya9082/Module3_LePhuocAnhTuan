import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public readonly apiUrl = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }
  getAllBook(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addNewBook(book): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }
  getBookById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteBookById(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  editBook(book, id): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, book);
  }
}
