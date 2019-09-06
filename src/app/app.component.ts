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

  isAdmin(){
    return this.authService.isAdmin();
  }

  isPartenaire(){
    return this.authService.isPartenaire();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

}

