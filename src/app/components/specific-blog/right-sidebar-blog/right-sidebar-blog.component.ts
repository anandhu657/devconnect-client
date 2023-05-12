import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../../../services/Blog/blog.service';

@Component({
  selector: 'app-right-sidebar-blog',
  templateUrl: './right-sidebar-blog.component.html',
  styleUrls: ['./right-sidebar-blog.component.css']
})
export class RightSidebarBlogComponent implements OnInit {
  @Input() user!: {
    _id: string,
    username: string,
    profile_pic: string,
    about: string,
    connectionsCount: number
  };
  @Input() tags!: [
    {
      name: string,
      _id: string
    }
  ]

  realatedBlog!: [{
    title: string,
    _id: string
  }]


  constructor(
    private _blogService: BlogService,
  ) { }

  ngOnInit() {
    this._blogService.getTagRelatedBlog(this.tags).subscribe((blogs: any) => {
      this.realatedBlog = blogs
      console.log(this.realatedBlog);
    })
  }
}
