import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private socket!: Socket

  constructor() {
    this.socket = io(environment.url);
  }

  sendNotification(questionId: string, sender: string, receiver: string) {
    this.socket.emit('notification', { questionId, sender, receiver });
  }

  getNewNotification(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('send-new-notification', (notification: any) => {
        console.log("llolo")
        observer.next(notification);
      });
    });
  }
}
