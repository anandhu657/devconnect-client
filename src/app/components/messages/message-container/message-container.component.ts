import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent {
  @Input() username!: string;
  @Input() profile_pic!: string;
}
