import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/Report/report.service';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/Admin/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ConformationDialogComponent } from '../conformation-dialog/conformation-dialog.component';

export interface BlogData {
  content: {
    email: string;
    reportCount: number;
  };
  reporteduser: {
    email: string
  }
  reason: string;
  reportedDate: Date;
  valid: boolean;
}

@Component({
  selector: 'app-blog-report-details',
  templateUrl: './blog-report-details.component.html',
  styleUrls: ['./blog-report-details.component.css']
})
export class BlogReportDetailsComponent implements AfterViewInit{
  displayedColumns: string[] = ['no', 'reportedBlog', 'reason', 'date'];
  dataSource!: MatTableDataSource<BlogData>;
  blogId!: string;
  reportCount!: number;
  button!: {
    text: string,
    color: string
  }
  blog!:{
    title:string
    details:string
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly _reportService: ReportService,
    private readonly _adminService: AdminService,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog
  ) {
    this._route.params.subscribe(params => {
      this.blogId = params['id'];
    })
    this._reportService.getBlogDetailReport(this.blogId).subscribe((data: any) => {

      if (data) {
        this.blog = data[1].content;
        data[1].content.status ? this.button = {
          text: 'Block',
          color: 'warn'
        } : this.button = {
          text: 'UnBlock',
          color: 'primary'
        }
        this.reportCount = data[1].content.reportCount;
        this.dataSource = new MatTableDataSource(data);
      }
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

  blockBlog() {
    const dialogRef = this._dialog.open(ConformationDialogComponent, {
      data: { message: `${this.button.text} ${this.blogId}` },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._adminService.blockBlog(this.blogId).subscribe((data: any) => {
          data.status ? this.button = {
            text: 'Block',
            color: 'warn'
          } : this.button = {
            text: 'UnBlock',
            color: 'primary'
          }
        })
      }
    });
  }
}
