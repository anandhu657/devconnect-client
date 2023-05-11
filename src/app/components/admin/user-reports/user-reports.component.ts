import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/Report/report.service';

export interface UserData {
  content: {
    email: string;
    reportCount: number;
  };
  reason: string;
  valid: boolean;
}

@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent implements AfterViewInit {
  displayedColumns: string[] = ['user', 'reason', 'total', 'action', 'details'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly _reportService: ReportService
  ) {
    this._reportService.getUserReports().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
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

  changeValidStatus(id: string) {
    this._reportService.changeValidStatus(id).subscribe((data: any) => {
      console.log(this.dataSource)
    })
  }
}
