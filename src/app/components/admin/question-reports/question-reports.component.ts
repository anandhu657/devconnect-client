import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/Report/report.service';

export interface QuestionData {
  content: {
    title: string;
    reportCount: number;
  };
  reason: string;
  valid: boolean;
}

@Component({
  selector: 'app-question-reports',
  templateUrl: './question-reports.component.html',
  styleUrls: ['./question-reports.component.css']
})
export class QuestionReportsComponent implements AfterViewInit{
  displayedColumns: string[] = ['questiontitle', 'reason', 'total', 'action', 'details'];
  dataSource!: MatTableDataSource<QuestionData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly _reportService: ReportService
  ) {
    this._reportService.getQuestionReports().subscribe((data: any) => {
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

  changeValidStatusQuestion(id: string) {
    this._reportService.changeValidStatusQuestion(id).subscribe((data: any) => {
      console.log(this.dataSource)
    })
  }
}
