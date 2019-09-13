import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-warima';

  constructor(private authService:AuthService){}

  isAuthenticated(){
    /* console.log(this.authService.isAuthenticated())
    return this.authService.isAuthenticated(); */
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isPartenaire(){
    return this.authService.isPartenaire();
  }

  logOut(){
    return this.authService.logOut();

  }

}


