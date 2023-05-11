import { Component, Input, OnInit } from '@angular/core';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare, faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { BlogService } from 'src/app/services/Blog/blog.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { ShareModalComponent } from '../../share-modal/share-modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.css']
})
export class BlogContainerComponent implements OnInit {
  likeButton = farHeart;
  shareButton = faShare;
  saveButton = farBookmark;

  @Input() title!: string;
  @Input() views!: number;
  @Input() user!: string;
  @Input() askedTime!: Date;
  @Input() profile_pic!: string;
  @Input() blog_id!: string;
  @Input() details!: string;
  @Input() likedBy!: string[];
  @Input() tags!: [
    {
      name: string,
      _id: string
    }
  ];
  @Input() blogUserId!: string;
  userId!: string;

  constructor(
    private _blogService: BlogService,
    private _userService: ProfileService,
    private _dialog: MatDialog

  ) { }

  ngOnInit() {
    this._userService.getUserId().subscribe((data: any) => {
      this.userId = data
      // this.likedBy?.includes(this.userId) ? this.likeButton = fasHeart : this.likeButton = farHeart;
    });
  }

  like() {
    if (this.likeButton == farHeart) {
      this._blogService.likeBlog(this.blog_id).subscribe(() => this.likeButton = fasHeart);
    }
    else {
      this._blogService.likeBlog(this.blog_id).subscribe(() => this.likeButton = farHeart);
    }
  }

  openDialog(blog_id: string) {
    this._dialog.open(ShareModalComponent, {
      data: {
        url: `${environment.shareUrl}blogs/${blog_id}`,
      }
    });
  }

  saveBlog() {
    if (this.saveButton == farBookmark) {
      this._blogService.saveBlog(this.blog_id).subscribe(() => this.saveButton = fasBookmark);
    }
    else {
      this._blogService.saveBlog(this.blog_id).subscribe(() => this.saveButton = farBookmark);
    }
  }
}
