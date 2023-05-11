import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-saved-blogs',
  templateUrl: './saved-blogs.component.html',
  styleUrls: ['./saved-blogs.component.css']
})
export class SavedBlogsComponent implements OnInit {
  @Input() userId!: string;
  savedBlogs!: any[];

  constructor(
    private _profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this._profileService.getSavedBlogs(this.userId).subscribe((blogs: any) => {
      console.log(blogs)
      this.savedBlogs = blogs.savedBlogs;
    })
  }
}
