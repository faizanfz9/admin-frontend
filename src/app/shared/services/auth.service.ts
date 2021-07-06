import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // login user
  login(user: any) {
    return this.http.post<any>(this.url + '/admin/login', user);
  }

  // Set token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Get token
  getToken() {
    return localStorage.getItem("token");
  }

  // check authentication
  isAuthenticated() {
    return this.getToken() ? true : false;
  }

  forgotPwd(email: any) {
    return this.http.post<any>(this.url + '/admin/forgot-password', email);
  }
}
