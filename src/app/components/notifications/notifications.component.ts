import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/Notification/notification.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: any = [];

  constructor(
    private _notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this._notificationService.getNewNotification().subscribe((notification: string) => {
      console.log(notification, "kkkokokokok")
      this.notifications.push(notification);
    });
  }

}
