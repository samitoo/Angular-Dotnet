import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Utiliserve';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService, private titleService: Title) {}

  ngOnInit() {
      this.titleService.setTitle(this.title);
      const token = localStorage.getItem('token');
      if (token) {
        this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      }
  }
}
