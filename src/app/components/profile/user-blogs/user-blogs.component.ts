import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/Blog/blog.service';

@Component({
  selector: 'app-user-blogs',
  templateUrl: './user-blogs.component.html',
  styleUrls: ['./user-blogs.component.css']
})
export class UserBlogsComponent implements OnInit {
  @Input() userId!: string;
  userBlogs!:any[];

  constructor(
    private _blogService: BlogService
  ) { }

  ngOnInit(): void {
    console.log(this.userId)
    this._blogService.getUserBlogs(this.userId).subscribe((blogs: any) => {
      console.log(blogs)
      this.userBlogs = blogs;
    })
  }

}
