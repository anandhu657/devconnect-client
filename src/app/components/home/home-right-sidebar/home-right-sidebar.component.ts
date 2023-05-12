import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/Blog/blog.service';

@Component({
  selector: 'app-home-right-sidebar',
  templateUrl: './home-right-sidebar.component.html',
  styleUrls: ['./home-right-sidebar.component.css']
})
export class HomeRightSidebarComponent implements OnInit {
  filterValue: any;
  filterBY: string[] = ["All","No answers", "No accepted answers"];
  sortValue: any;
  sortedBY: string[] = ["Newest", "Most Viewed", "Least Viewed"];
  latestBlogs: any;
  @Output() filterEvent = new EventEmitter<string>();
  @Output() sortEvent = new EventEmitter<string>();

  constructor(private _blogService: BlogService) { }

  ngOnInit(): void {
    this._blogService.getLatestBlog().subscribe((data) => {
      this.latestBlogs = data
    })
  }

  sendFilter() {
    this.filterEvent.emit(this.filterValue)
  }

  sendSort() {
    this.sortEvent.emit(this.sortValue)
  }
}
