import { AlertifyService } from './../_services/alertify.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error('You can\'t access');
    this.router.navigate(['']);
    return false;
  }
}
