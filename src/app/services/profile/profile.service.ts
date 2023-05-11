import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http: HttpClient
  ) { }

  gotoProfile(userId: string | null) {
    return this._http.get(environment.url + 'profile/' + userId);
  }

  editProfile() {
    return this._http.get(environment.url + 'editUser')
  }

  editProfileDetails(userDetails: any) {
    return this._http.post(environment.url + 'editUser', userDetails)
  }

  getProfileById(id: string) {
    return this._http.get(environment.url + 'profile/' + id)
  }

  getUserId() {
    return this._http.get(environment.url + 'profile/current/user');
  }

  sendConnectionRequest(userId: string) {
    return this._http.post(environment.url + 'profile/sendConnectionRequest', { userId })
  }

  acceptRequest(userId: string) {
    return this._http.post(environment.url + 'profile/acceptRequest', { userId })
  }

  disConnectRequest(userId: string) {
    return this._http.post(environment.url + 'profile/disConnectRequest', { userId })
  }

  getSavedBlogs(userId: string) {
    return this._http.get(environment.url + 'profile/savedBlogs/' + userId);
  }
}
