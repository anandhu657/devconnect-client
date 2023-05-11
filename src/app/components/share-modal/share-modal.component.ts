import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.css']
})
export class ShareModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
