import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/Report/report.service';

export interface BlogData {
  content: {
    _id: string;
    title: string;
    reportCount: number;
  };
  reason: string;
  valid: boolean;
}

@Component({
  selector: 'app-blog-reports',
  templateUrl: './blog-reports.component.html',
  styleUrls: ['./blog-reports.component.css']
})
export class BlogReportsComponent implements AfterViewInit {
  displayedColumns: string[] = ['blogtitle', 'reason', 'total', 'action', 'details'];
  dataSource!: MatTableDataSource<BlogData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly _reportService: ReportService
  ) {
    this._reportService.getBlogReports().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeValidStatusBlog(id: string) {
    this._reportService.changeValidStatusBlog(id).subscribe((data: any) => {
      console.log(this.dataSource)
    })
  }
}
