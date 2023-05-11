import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { faThumbsUp, faThumbsDown, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { QuestionService } from 'src/app/services/Question/question.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  likeButton = faThumbsUp
  dislikeButton = faThumbsDown
  checkButton = faCircleCheck
  answerComment!: FormGroup;
  panelOpenState = false;
  questionId!: string;
  @Input() answerId!: string;
  @Input() answer!: string;
  @Input() date!: Date;
  @Input() user!: {
    username: string,
    profile_pic: string,
    _id: string
  }
  @Input() comments!: [
    {
      comment: string,
      created_at: Date,
      user: {
        _id: string,
        username: string,
      }
    }
  ]

  constructor(
    private _formbuilder: FormBuilder,
    private _snackbar: MatSnackBar,
    private _questionService: QuestionService,
    private _route: ActivatedRoute,
  ) {
    this.answerComment = this._formbuilder.group({
      "comment": ["", this.emptyOrWhitespaceValidator]
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.questionId = params['id'];
    })
  }

  emptyOrWhitespaceValidator(control: FormControl) {
    if (control.value == null || control.value.trim() === '') {
      return { emptyOrWhitespace: true };
    }
    return null;
  }

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, { duration: 3000 })
  }

  addAnswerComment(answerId: string) {
    console.log(answerId, "answerid")
    this._questionService.addAnswerComment(this.questionId, answerId, this.answerComment.value).subscribe((res: any) => {
      console.log(res)
      if (res.success)
        this.openSnackBar("Comment added succefully", "undo")
      else
        this.openSnackBar("Something went wrong please try again", "undo")
    })
  }
}
