import { Component, Input } from '@angular/core';
import { faHome, faBlog, faMessage, faBell, faQuestion, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  home = faHome
  blog = faBlog
  message = faMessage
  notification = faBell
  question = faQuestion
  addBlog = faSquarePlus
  profile = faUser

  @Input() userId!: string
}
