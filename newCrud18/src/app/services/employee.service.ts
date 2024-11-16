import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  API_URL = "http://localhost:3000/posts";

  getAllEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.API_URL);
  }

  getEmployee(id:number): Observable<Employee> {console.log('hey',this.API_URL+'/'+id);
    return this._http.get<Employee>(this.API_URL+'/'+id);
  }

  saveEmployee(data: Employee): Observable<Employee> {
    return this._http.post<Employee>(this.API_URL+'/',data);
  }

  updateEmployee(data: Employee): Observable<Employee> {
    return this._http.put<Employee>(this.API_URL+'/'+data.id,data)
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this._http.delete<Employee>(this.API_URL+'/'+id)
  }
}
