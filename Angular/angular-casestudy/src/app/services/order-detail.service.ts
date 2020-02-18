import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  public readonly apiUrl = 'http://localhost:3000/orders-detail';
  constructor(private http: HttpClient) { }
  getAllOrderDetail(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addNewOrderDetail(orderDetail): Observable<any> {
    return this.http.post(this.apiUrl, orderDetail);
  }
  getOrderDetailById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteOrderDetailById(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  editOrderDetail(orderDetail, id: number): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, orderDetail);
  }
}
