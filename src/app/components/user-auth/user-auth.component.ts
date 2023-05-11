import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGoogle, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../services/Auth/auth.service';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  github = faGithub
  google = faGoogle
  facebook = faFacebook

  
  authSubscription!: Subscription;

  constructor(
    private auth: AuthService,
    private _router: Router,
    private _app: AppComponent
  ) {  }

  async googleAuth() {
    this.authSubscription = (await this.auth.signInWithGoogle()).subscribe((res: any) => {
      this.loginRedirect(res);
    })
  }

  async facebookAuth() {
    this.authSubscription = (await this.auth.signInWithFacebook()).subscribe((res) => {
      this.loginRedirect(res);
    })
  }

  async githubAuth() {
    this.authSubscription = (await this.auth.signInWithGithub()).subscribe((res) => {
      this.loginRedirect(res);
    })
  }

  loginRedirect(res: any) {
    if (res) {
      localStorage.setItem('token', res.token);
      this._router.navigate(['/home'])
    } else {
      console.log("hai its wrong");
    }
  }

  // ngOnDestroy(): void {
  //   this.authSubscription.unsubscribe();
  // }
}
