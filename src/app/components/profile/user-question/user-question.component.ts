import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.css']
})
export class UserQuestionComponent {
  @Input() title!: string;
  @Input() answerCount!: number;
  @Input() views!: number;
  @Input() askedTime!: Date;
  @Input() ques_id!: string;
}
