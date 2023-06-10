import { Component, Input } from '@angular/core';
import { faHome, faBlog, faMessage, faBell, faQuestion, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userlayout',
  templateUrl: './userlayout.component.html',
  styleUrls: ['./userlayout.component.css']
})
export class UserlayoutComponent {

  @Input() userId!: string
  buttons = [
    { id: 1, name: 'Home', icon: faHome, link: 'home' },
    { id: 2, name: 'Questions', icon: faQuestion, link: 'questions' },
    { id: 3, name: 'Blogs', icon: faBlog, link: 'blogs' },
    { id: 4, name: 'Messages', icon: faMessage, link: 'message' },
    { id: 5, name: 'Ask Question', icon: faSquarePlus, link: 'ask-question' },
    { id: 6, name: 'Add Blog', icon: faSquarePlus, link: 'blog/post' },
    { id: 7, name: 'Notifications', icon: faBell, link: 'notification' },
    { id: 8, name: 'Profile', icon: faUser, link: 'profile/' + this.userId }
  ]

  trackByButtonId(index: number, button: any): number {
    return button.id;
  }

}
