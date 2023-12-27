import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  private apiUrl = `${environment.apiBaseUrl}/test/`;

  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(this.apiUrl + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.apiUrl + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.apiUrl + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.apiUrl + 'admin', { responseType: 'text' });
  }
}
