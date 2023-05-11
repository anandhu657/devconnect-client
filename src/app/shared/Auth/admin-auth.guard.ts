import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private readonly _router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem('adminToken')) {
      this._router.navigate(['/admin/report/user'])
      return false;
    } else {
      return true;
    }
  }

}
