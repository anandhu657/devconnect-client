import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/Report/report.service';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/Admin/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ConformationDialogComponent } from '../conformation-dialog/conformation-dialog.component';

export interface UserData {
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
  selector: 'app-user-report-details',
  templateUrl: './user-report-details.component.html',
  styleUrls: ['./user-report-details.component.css']
})
export class UserReportDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['no', 'reportedUser', 'reason', 'date'];
  dataSource!: MatTableDataSource<UserData>;
  userId!: string;
  reportCount!: number;
  button!: {
    text: string,
    color: string
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
      this.userId = params['id'];
    })
    this._reportService.getUserDetailReport(this.userId).subscribe((data: any) => {
      if (data) {
        data[0].content.status ? this.button = {
          text: 'Block',
          color: 'warn'
        } : this.button = {
          text: 'UnBlock',
          color: 'primary'
        }
        this.reportCount = data[0].content.reportCount;
        this.dataSource = new MatTableDataSource(data);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource.paginator)
    console.log(this.dataSource.sort)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  blockUser() {
    const dialogRef = this._dialog.open(ConformationDialogComponent, {
      data: { message: `${this.button.text} ${this.userId}` },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._adminService.blockUser(this.userId).subscribe((data: any) => {
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
