import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/home'])
      return false;
    } else {
      return true;
    }
  }

}
