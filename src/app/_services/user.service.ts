import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDto } from '../dtos/user/register.dto';
import { LoginDto } from '../dtos/user/login.dto';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrlRegister = `${environment.apiBaseUrl}/auth/signup`;
  private apiUrlLogin = `${environment.apiBaseUrl}/auth/signin`;

  private apiConfig = {
    headers: this.createHeader(),
  };

  constructor(private http: HttpClient) {}

  private createHeader(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  register(registerDTO: RegisterDto): Observable<any> {
    return this.http.post(this.apiUrlRegister, registerDTO, this.apiConfig);
  }

  login(loginDTO: LoginDto): Observable<any> {
    return this.http.post(this.apiUrlLogin, loginDTO, this.apiConfig);
  }
}
