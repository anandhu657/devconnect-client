import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-report-reason',
  templateUrl: './report-reason.component.html',
  styleUrls: ['./report-reason.component.css']
})
export class ReportReasonComponent {
  constructor(
    public dialogRef: MatDialogRef<ReportReasonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
