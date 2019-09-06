import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _loginUrl = 'http://localhost:8000/api/login_check';
 
  roles: any;

  constructor(private http: HttpClient) { }

  /*isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }*/

  loginUrl(user: {}) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.post<any>(this._loginUrl, user, { headers: headers });
  }

  /*logoutUrl(user: any) {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigateByUrl('/'), user;
  }*/

  isAdmin() {
    return this.roles.indexOf('Super-Admin') >= 0;
  }

  isPartenaire() {
    return this.roles.indexOf('Partenaire') >= 0;
  }

  isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isPartenaire());
  }

}

