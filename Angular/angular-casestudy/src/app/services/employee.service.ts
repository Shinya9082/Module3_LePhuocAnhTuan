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
  addNewEmployee(employee): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
  deleteEmployeeById(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  editEmployee(employee, employeeId): Observable<any> {
    return this.http.put(this.apiUrl + '/' + employeeId, employee);
  }
}
