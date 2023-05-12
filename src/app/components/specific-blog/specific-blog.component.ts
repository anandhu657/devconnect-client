import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare, faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { BlogService } from 'src/app/services/Blog/blog.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { ShareModalComponent } from '../share-modal/share-modal.component';
import { environment } from 'src/environments/environment';
import { ReportReasonComponent } from '../user/report-reason/report-reason.component';
import { ReportService } from 'src/app/services/Report/report.service';

@Component({
  selector: 'app-specific-blog',
  templateUrl: './specific-blog.component.html',
  styleUrls: ['./specific-blog.component.css']
})
export class SpecificBlogComponent implements OnInit {

  likeButton = farHeart;
  shareButton = faShare;
  saveButton = farBookmark;

  blogId!: string;
  userId!: string;
  blog!:
    {
      _id: string,
      title: string,
      details: string,
      answerCount: number,
      views: number,
      date: Date,
      user: {
        _id: string,
        username: string,
        profile_pic: string,
        about: string
        connectionsCount: number
      },
      tags: [{
        name: string,
        _id: string
      }]
    }

  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService,
    private _userService: ProfileService,
    private _dialog: MatDialog,
    private readonly _report:ReportService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.blogId = params['id'];
      this._userService.getUserId().subscribe((data: any) => {
        this.userId = data
      });
    
      this._blogService.getBlog(this.blogId).subscribe((res: any) => {
        if (res) {
          console.log(res);
          this.blog = res;
          res.likedBy?.includes(this.userId) ? this.likeButton = fasHeart : this.likeButton = farHeart;
          res.savedBlogs?.includes(this.userId) ? this.saveButton = fasBookmark : this.saveButton = farBookmark;
        } else {
          console.log("something went wrong in dashboard");
        }
      })
    })
  }

  openDialog() {
    this._dialog.open(ShareModalComponent, {
      data: {
        url: `${environment.shareUrl}blogs/${this.blogId}`,
      }
    });
  }

  openReportReasonDialog() {
    const dialogRef = this._dialog.open(ReportReasonComponent, {
      data: { reason: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reportBlog(result)
    });
  }

  private reportBlog(reason: string) {
    this._report.reportBlog(this.blogId, reason).subscribe((res: any) => {
      console.log(res);
    })
  }

  like() {
    if (this.likeButton == farHeart) {
      this._blogService.likeBlog(this.blogId).subscribe(() => this.likeButton = fasHeart);
    }
    else {
      this._blogService.likeBlog(this.blogId).subscribe(() => this.likeButton = farHeart);
    }
  }

  saveBlog() {
    if (this.saveButton == farBookmark) {
      this._blogService.saveBlog(this.blogId).subscribe(() => this.saveButton = fasBookmark);
    }
    else {
      this._blogService.saveBlog(this.blogId).subscribe(() => this.saveButton = farBookmark);
    }
  }
}
