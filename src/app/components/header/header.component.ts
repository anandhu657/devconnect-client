import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  signout = faSignOut

  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _app: AppComponent
  ) { }

  logout() {
    this._auth.logout();
    // this._app.setAuthenticationStatus(false);
    this._router.navigate(['/login'])
    // location.href = '/login'
  }
}
