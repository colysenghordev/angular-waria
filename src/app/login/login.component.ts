import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  helper = new JwtHelperService();

  // tslint:disable-next-line: variable-name
  constructor(private _auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  loginUser() {
   this._auth.loginUrl(this.loginUserData)
    .subscribe(
      res => {
        const token = res.token;
        localStorage.setItem('token',token);
        const decodedToken = this.helper.decodeToken(token);
        console.log(decodedToken);
        localStorage.setItem('username',decodedToken.username);
        localStorage.setItem('roles',decodedToken.roles[0]);
        localStorage.setItem('expiration',decodedToken.exp);
        console.log(localStorage);
        this.router.navigate(["/lister-partenaire"])
      },
      err => console.log(err),
    );
  }

}
