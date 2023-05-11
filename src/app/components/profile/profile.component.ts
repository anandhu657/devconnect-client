import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { QuestionService } from 'src/app/services/Question/question.service';
import { Iprofile } from 'src/app/models/Profile';
import { ReportReasonComponent } from '../user/report-reason/report-reason.component';
import { ReportService } from 'src/app/services/Report/report.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  github = faGithub
  linkedIn = faLinkedin
  link = faLink

  user!: Iprofile;
  questions: any;
  userId!: string | null;
  buttonText!: string;
  currentUserId!: string;

  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private _profileService: ProfileService,
    private _questionService: QuestionService,
    private _route: ActivatedRoute,
    private readonly _report: ReportService
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.userId = params.get('user');
    })

    this._profileService.getUserId().subscribe((currentUser: any) => {
      this.currentUserId = currentUser;
    })

    this._profileService.gotoProfile(this.userId).subscribe((userProfile: any) => {
      console.log(userProfile);
      if (userProfile) {
        this.user = userProfile;
        const connection = userProfile.connections.find((u: any) => u.user === this.currentUserId);

        if (connection)
          this.buttonText = connection.status
        else
          this.buttonText = 'Connect';
        this._questionService.getQuestionsByUser(this.user._id).subscribe((userProfileQuestions: any) => {
          if (userProfileQuestions) {
            this.questions = userProfileQuestions;
          }
        })
      }
    })

  }

  openDialog() {
    const dialogRef = this._dialog.open(EditProfileComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openReportReasonDialog() {
    const dialogRef = this._dialog.open(ReportReasonComponent, {
      data: { reason: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reportUser(result)
    });
  }

  private reportUser(reason: string) {
    this._report.reportUser(this.userId, reason).subscribe((res: any) => {
      console.log(res);
      
    })
  }

  connectUser() {
    this._profileService.sendConnectionRequest(this.user._id).subscribe(() => {
      this.buttonText = "Requested"
    })
  }

  acceptUser() {
    this._profileService.acceptRequest(this.user._id).subscribe(() => {
      this.buttonText = "Connected"
    })
  }

  disconnectUser() {
    this._profileService.disConnectRequest(this.user._id).subscribe(() => {
      this.buttonText = "Connect"
    })
  }
}
