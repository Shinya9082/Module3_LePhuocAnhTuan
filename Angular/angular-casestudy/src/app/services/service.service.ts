import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public readonly apiUrl = 'http://localhost:3000/services';
  constructor(private http: HttpClient) { }
  getAllService(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addNewService(service): Observable<any> {
    return this.http.post(this.apiUrl, service);
  }
  getServiceById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteServiceById(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  editService(service, serviceId): Observable<any> {
    return this.http.put(this.apiUrl + '/' + serviceId, service);
  }
}
