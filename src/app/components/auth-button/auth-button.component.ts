import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {
  @Input() color: string | undefined;
  @Input() text: string | undefined;
  @Input() iconName!: IconProp;
  @Output() authBtnClick = new EventEmitter()

  onClick() {
    this.authBtnClick.emit();
  }
}
