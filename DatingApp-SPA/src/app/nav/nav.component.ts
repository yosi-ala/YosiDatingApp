import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService,
     private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      res => {
        this.alertifyService.success('Logged in successfully');
      }, err => {
        this.alertifyService.error(err);
      });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    return this.authService.logOut();
  }

}
