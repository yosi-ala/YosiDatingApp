import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService,
     private alertifyService: AlertifyService,
     private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      res => {
        this.alertifyService.success('Logged in successfully');
      }, err => {
        this.alertifyService.error(err);
      }, () => {
        this.router.navigate(['/members']);
      });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    this.authService.logOut();
    this.alertifyService.message('logged out');
    this.router.navigate(['']);
  }

}
