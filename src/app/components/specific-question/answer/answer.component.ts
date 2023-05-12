import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {
  faThumbsUp as farThumbsUp,
  faThumbsDown as farThumbsDown,
  faCircleCheck as farCircleCheck
} from '@fortawesome/free-regular-svg-icons';
import {
  faCircleCheck as fasCircleCheck,
  faThumbsUp as fasThumbsUp,
  faThumbsDown as fasThumbsDown
} from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from 'src/app/services/Question/question.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  likeButton = farThumbsUp
  dislikeButton = farThumbsDown
  checkButton = farCircleCheck
  acceptedButton = fasCircleCheck
  answerComment!: FormGroup;
  panelOpenState = false;
  questionId!: string;
  userId!: string;

  @Input() isOwner!: boolean;
  @Input() answerId!: string;
  @Input() answer!: string;
  @Input() date!: Date;
  @Input() user!: {
    username: string,
    profile_pic: string,
    _id: string
  }
  @Input() questionAsked!: string;
  @Input() acceptedAnswer!: boolean;
  @Input() likes!: number;
  @Input() dislikes!: number;
  @Input() likedusers!: string[];
  @Input() dislikedusers!: string[];
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
    private _profile: ProfileService
  ) {
    this.answerComment = this._formbuilder.group({
      "comment": ["", this.emptyOrWhitespaceValidator]
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.questionId = params['id'];
    })
    this._profile.getUserId().subscribe((res: any) => {
      this.userId = res;
      res === this.questionAsked ? this.isOwner = true : this.isOwner = false;
      this.likedusers.includes(this.userId) ? this.likeButton = fasThumbsUp : this.likeButton = farThumbsUp
      this.dislikedusers.includes(this.userId) ? this.dislikeButton = fasThumbsDown : this.dislikeButton = farThumbsDown
      console.log()
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

  acceptAnswer(answerId: string) {
    this._questionService.acceptAnswer(this.questionId, answerId).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.checkButton = fasCircleCheck
        this.openSnackBar("Answer accepted succefully", "undo")
      }
      else
        this.openSnackBar("Something went wrong please try again", "undo")
    })
  }

  like(answerId: string) {
    this._questionService.likeAnswer(this.questionId, answerId).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.likeButton = fasThumbsUp
        this.dislikeButton = farThumbsDown
      }
      else
        this.openSnackBar("Something went wrong please try again", "undo")
    })
  }

  dislike(answerId: string) {
    this._questionService.dislikeAnswer(this.questionId, answerId).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.dislikeButton = fasThumbsDown
        this.likeButton = farThumbsUp
      }
      else
        this.openSnackBar("Something went wrong please try again", "undo")
    })
  }
}
