import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent {
  @Input() title!: string;
  @Input() answerCount!: number;
  @Input() views!: number;
  @Input() user!: string;
  @Input() userId!: string;
  @Input() askedTime!: Date;
  @Input() profile_pic!: string;
  @Input() ques_id!: string;
  @Input() tags!: [
    {
      name: string,
      _id: string
    }
  ];
}
