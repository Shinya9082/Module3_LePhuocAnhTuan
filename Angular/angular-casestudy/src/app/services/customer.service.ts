import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public readonly apiUrl = 'http://localhost:3000/customers';
  constructor(private http: HttpClient) { }
  getAllCustomer(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addNewCustomer(customer): Observable<any> {
    return this.http.post(this.apiUrl, customer);
  }
  getCustomerById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteCustomerById(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  editCustomer(customer, customerId): Observable<any> {
    return this.http.put(this.apiUrl + '/' + customerId, customer);
  }
}
