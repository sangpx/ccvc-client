import { DepartmentDto } from './../dtos/department/department.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private baseURL = `${environment.apiBaseUrl}/departments`;

  constructor(private httpClient: HttpClient) {}

  getDepartmentsList(): Observable<DepartmentDto[]> {
    return this.httpClient.get<DepartmentDto[]>(
      `${this.baseURL}/getAllDepartment`
    );
  }

  getDepartmentsById(id: number): Observable<DepartmentDto> {
    return this.httpClient.get<DepartmentDto>(
      `${this.baseURL}/getDepartmentById/${id}`
    );
  }

  createDepartment(departmentDto: DepartmentDto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addDepartment`, departmentDto);
  }

  updateDepartment(departmentDto: DepartmentDto): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}/updateDepartment`,
      departmentDto
    );
  }

  deleteDepartment(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.baseURL}/deleteDepartment/${id}`
    );
  }
}
