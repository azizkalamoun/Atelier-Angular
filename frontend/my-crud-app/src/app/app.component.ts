import { Component } from '@angular/core';
import { AuthService } from './authentification/auth.service'; // Import your AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-app';
  authService: AuthService; // Declare it as a public property

  constructor(authService: AuthService) {
    this.authService = authService; // Assign it in the constructor
  }
  logout(){
    this.authService.doLogout()
  }
}
