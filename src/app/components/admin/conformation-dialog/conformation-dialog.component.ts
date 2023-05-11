import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-conformation-dialog',
  templateUrl: './conformation-dialog.component.html',
  styleUrls: ['./conformation-dialog.component.css']
})
export class ConformationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
