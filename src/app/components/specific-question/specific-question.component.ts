import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  faThumbsUp as farThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import {
  faThumbsUp as fasThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from 'src/app/services/Question/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ReportReasonComponent } from '../user/report-reason/report-reason.component';
import { ReportService } from 'src/app/services/Report/report.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-specific-question',
  templateUrl: './specific-question.component.html',
  styleUrls: ['./specific-question.component.css']
})
export class SpecificQuestionComponent implements OnInit {
  panelOpenState = false;
  likeButton = farThumbsUp
  questionId!: string
  question!:
    {
      _id: string,
      title: string,
      description: string,
      answerCount: number,
      views: number,
      date: Date,
      acceptedAnswer: string,
      user: {
        _id: string,
        username: string,
        profile_pic: string
      },
      answers: [
        {
          _id: string,
          answer: string,
          date: Date,
          accepted: boolean,
          user: {
            _id: string,
            username: string,
            profile_pic: string
          },
          likes: number,
          dislikes: number,
          likedusers: string[],
          dislikedusers: string[],
          comments: [
            {
              comment: string,
              created_at: Date,
              user: {
                _id: string,
                username: string,
              }
            }
          ]
        }
      ],
      tags: [
        {
          name: string,
          _id: string
        }
      ],
      comments: [
        {
          comment: string,
          created_at: Date,
          user: {
            _id: string,
            username: string,
          }
        }
      ]
    }
  questionComment!: FormGroup;
  questionAsked!: string;
  solution!: FormGroup
  answerCount!: number;
  isOwner!: boolean;
  accepted!: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _questionService: QuestionService,
    private _formbuilder: FormBuilder,
    private _snackbar: MatSnackBar,
    private _toastr: ToastrService,
    private _dialog: MatDialog,
    private readonly _report: ReportService,
    private readonly _profile: ProfileService
  ) {
    this.questionComment = this._formbuilder.group({
      "comment": ["", this.emptyOrWhitespaceValidator]
    })

    this.solution = this._formbuilder.group({
      "answer": ["", this.emptyOrWhitespaceValidator]
    })
  }

  emptyOrWhitespaceValidator(control: FormControl) {
    if (control.value == null || control.value.trim() === '') {
      return { emptyOrWhitespace: true };
    }
    return null;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.questionId = params['id'];
      this._questionService.getQuestions(this.questionId).subscribe((res: any) => {
        console.log(res);
        if (res) {
          this.question = res
          this.questionAsked = this.question.user._id
          this.answerCount = this.question.answers.length
          this.question.acceptedAnswer ? this.accepted = true : this.accepted = false;
        } else {
          console.log("something went wrong in dashboard");
        }
      })
    })

    this._profile.getUserId().subscribe((res: any) => {
      res === this.question.user._id ? this.isOwner = true : this.isOwner = false;
      this.isOwner || this.accepted ? this.accepted = true : this.accepted = false;
      console.log(this.accepted);
    })

  }

  addAnswer() {
    this._questionService.addAnswer(this.questionId, this.solution.value).subscribe((res: any) => {
      console.log(res)
      if (res.success)
        this.openSnackBar("Answer added succefully", "undo")
      else
        this.openSnackBar("Something went wrong please try again", "undo")
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, { duration: 3000 })
  }

  like() {
    this._questionService.likeQuestion(this.questionId).subscribe((res: any) => {
      if (res.success) {
        this.likeButton = fasThumbsUp
        this._toastr.success('liked the post successfully', 'Liked', {
          timeOut: 2000,
          progressBar: true,
          positionClass: 'toast-top-center'
        });
      }
      else {
        this.likeButton = farThumbsUp
        this._toastr.warning('You already liked the post', 'Something went wrong', {
          timeOut: 2000,
          progressBar: true,
          positionClass: 'toast-top-center'
        });
      }
    })
  }

  dislike() {
    this._questionService.dislikeQuestion(this.questionId).subscribe((res: any) => {
      if (res.success)
        this._toastr.success('disliked the post successfully', 'disLiked', {
          timeOut: 2000,
          progressBar: true,
          positionClass: 'toast-top-center'
        });
      else
        this._toastr.warning('You already dislike the post', 'Something went wrong', {
          timeOut: 2000,
          progressBar: true,
          positionClass: 'toast-top-center'
        });
    })
  }

  addQuestionComment() {
    this._questionService.addQuestionComment(this.questionId, this.questionComment.value).subscribe((res: any) => {
      console.log(res)
      if (res.success)
        this.openSnackBar("Comment added succefully", "undo")
      else
        this.openSnackBar("Something went wrong please try again", "undo")
    })
  }


  openDialog() {
    const dialogRef = this._dialog.open(ReportReasonComponent, {
      data: { reason: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reportQuestion(result)
    });
  }

  private reportQuestion(reason: string) {
    this._report.reportQuestion(this.questionId, reason).subscribe((res: any) => {
      console.log(res);
    })
  }
}