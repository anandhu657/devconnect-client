import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/Blog/blog.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs!: any;
  pageIndex = 0
  pageSize = 5
  totalCount = 0

  constructor(
    private _blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.loadBlogs()
  }

  loadBlogs() {
    this._blogService.getAllBlogs(this.pageIndex, this.pageSize).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.blogs = res.blogs;
        this.totalCount = res.totalPosts;
        console.log(this.blogs);
      } else {
        console.log("something went wrong in dashboard");
      }
    })
  }

  receiveFilterValue(filterValue: any) {
    console.log(filterValue, "hai");

    if (filterValue == "No answers") {
      this._blogService.getNoAnswers().subscribe((res: any) => {
        console.log(res);
        if (res) {
          this.blogs = res
          console.log(this.blogs);
        } else {
          console.log("something went wrong in dashboard");
        }
      })
    }
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadBlogs();
  }
}
