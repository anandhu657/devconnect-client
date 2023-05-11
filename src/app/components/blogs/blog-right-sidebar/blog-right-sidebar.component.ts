import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-right-sidebar',
  templateUrl: './blog-right-sidebar.component.html',
  styleUrls: ['./blog-right-sidebar.component.css']
})
export class BlogRightSidebarComponent {
  filterValue: any;
  filterBY: string[] = ["No answers", "No accepted answers"];
  latestBlogs: any;
  @Output() filterEvent = new EventEmitter<string>();

  sendFilter() {
    this.filterEvent.emit(this.filterValue)
    console.log(this.filterValue);
  }
}
