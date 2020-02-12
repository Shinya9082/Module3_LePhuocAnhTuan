import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public readonly apiUrl = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  getAllEmployee(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}