import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  registerMode = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  registerToggle() {
    this.registerMode = true;
  }

  goToLogin() {
    this.router.navigate(['/admin']);
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
