import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeDto } from '../dtos/employee/employee.dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = `${environment.apiBaseUrl}/employees`;

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<EmployeeDto[]> {
    return this.httpClient.get<EmployeeDto[]>(`${this.baseURL}/getAllEmployee`);
  }

  getEmployeesById(id: number): Observable<EmployeeDto> {
    return this.httpClient.get<EmployeeDto>(
      `${this.baseURL}/getEmployeeById/${id}`
    );
  }

  createEmployee(employeeDto: EmployeeDto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addEmployee`, employeeDto);
  }

  updateEmployee(employeeDto: EmployeeDto): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateEmployee`, employeeDto);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/deleteEmployee/${id}`);
  }
}
