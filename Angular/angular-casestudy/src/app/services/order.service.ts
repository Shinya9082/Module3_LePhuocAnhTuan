import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public readonly apiUrl = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) { }
  getAllOrder(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addNewOrder(order): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
  getOrderById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteOrderById(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  editOrder(order, serviceId): Observable<any> {
    return this.http.put(this.apiUrl + '/' + serviceId, order);
  }
}
