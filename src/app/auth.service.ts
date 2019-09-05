import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _loginUrl = 'http://localhost:8000/api/login_check';
  registerUser: any;

  constructor(private http: HttpClient) { }

  loginUrl(user) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.post<any>(this._loginUrl, user, {headers: headers});
  }
}
