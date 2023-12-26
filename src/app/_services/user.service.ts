import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDto } from '../dtos/registerDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  apiUrl = "http://localhost:8080/api/auth/signup";

  constructor(private http: HttpClient) { }

  register(registerDTO: RegisterDto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, registerDTO, {headers})
  }
}
