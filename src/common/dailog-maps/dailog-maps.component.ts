import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookNowDetails } from 'src/app/@core/models/main-models';

@Component({
  selector: 'app-dailog-maps',
  templateUrl: './dailog-maps.component.html',
  styleUrls: ['./dailog-maps.component.css']
})
export class DailogMapsComponent  {

  constructor(
    public dialogRef: MatDialogRef<DailogMapsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookNowDetails) { }

onNoClick(): void {
    this.dialogRef.close();
}
}
