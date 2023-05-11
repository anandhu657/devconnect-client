import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket!: Socket

  constructor(private _http: HttpClient) { }

  connect(): void {
    this.socket = io(environment.url);
  }

  users(): any {
    return this._http.get(`${environment.url}chat/users`);
  }

  getCurrentUser() {
    return this._http.get(environment.url + 'chat/currentuser');
  }

  sendPersonalMessage(message: any) {
    this.socket.emit('personal-message', message);
  }

  getPreviousMessages() {
    return this._http.get(environment.url + 'chat/messages/');
  }

  getPersonalMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('get-personal-message', (data: any) => {
        console.log(data);

        observer.next(data);
      });
    });
  }
}
