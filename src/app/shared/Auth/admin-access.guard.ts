import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {

  constructor(
    private readonly _router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem('adminToken')) {
      return true;
    } else {
      this._router.navigate(['/adminlogin'])
      return false;
    }
  }

}
