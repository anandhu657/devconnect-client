import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider
} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _fireauth: AngularFireAuth,
    private _http: HttpClient
  ) { }

  signInWithGoogle() {
    return this._fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      return this._http.post(environment.url + "login", res.additionalUserInfo?.profile);

    })
  }

  signInWithFacebook() {
    return this._fireauth.signInWithPopup(new FacebookAuthProvider).then(res => {
      return this._http.post(environment.url + "login", res.additionalUserInfo?.profile);
    })
  }

  signInWithGithub() {
    return this._fireauth.signInWithPopup(new GithubAuthProvider).then(res => {
      return this._http.post(environment.url + "login", res.additionalUserInfo?.profile);
    })
  }

  adminLogin(adminData: any) {
    return this._http.post(environment.url + "adminlogin", adminData);
  }

  logout() {
    localStorage.removeItem('token')
  }
}
