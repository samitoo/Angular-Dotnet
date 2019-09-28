import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  registerMode = false;

  constructor(public authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  registerToggle() {
    this.registerMode = true;
  }

  goToLogin() {
    if (this.loggedIn()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/admin']);
    }
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  // getValues() {
  //   this.http.get('http://localhost:5000/api/values').subscribe(response => {
  //     this.values = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
