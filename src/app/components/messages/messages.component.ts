import { Component, OnInit } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from 'src/app/services/Chat/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  menuIcon = faEllipsis

  currentUser: any;
  selectedUser!: string;
  selectedUsername!: string;
  selectedProfile!: string;
  messages: any[] = [];
  users: any[] = [];
  message!: string;

  constructor(private _chatService: ChatService) { }

  ngOnInit(): void {
    this._chatService.connect();
    this._chatService.getCurrentUser().subscribe(user => this.currentUser = user);
    this._chatService.users().subscribe((x: any[]) => this.users = x);
    this._chatService.getPersonalMessages().subscribe((message: any) => {
      if ((message.sender === this.currentUser.email && message.recipient === this.selectedUser) ||
        (message.sender === this.selectedUser && message.recipient === this.currentUser.email)) {
        message.sender === this.currentUser.email ? message.isSender = true : message.isReceiver = true;
      }
      if (this.selectedUser === message.sender) {
        this.messages.push(message);
      }
      console.log(message, "hhiihhsssssi");
    })
  }

  selectUser(user: any) {
    this.selectedUser = user.email;
    this.selectedUsername = user.username;
    this.selectedProfile = user.profile_pic;
    this._chatService.getPreviousMessages(this.selectedUser).subscribe((messages: any) => {
      this.messages = messages.map((message: any) => {
        if ((message.sender === this.currentUser.email && message.recipient === this.selectedUser) ||
          (message.sender === this.selectedUser && message.recipient === this.currentUser.email)) {
          message.sender === this.currentUser.email ? message.isSender = true : message.isReceiver = true;
        }
        return message;
      })
      console.log(this.messages, "hhiihhi");
    })
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this._chatService.sendPersonalMessage({
        sender: this.currentUser.email,
        recipient: this.selectedUser,
        text: this.message
      });

      this.messages.push({
        sender: this.currentUser.email,
        recipient: this.selectedUser,
        text: this.message,
        isSender: true
      });
      this.message = '';
    }
  }
}
