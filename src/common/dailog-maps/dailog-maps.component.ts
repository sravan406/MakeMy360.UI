import { Component, Inject, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDetails } from 'src/app/@core/models/admin-models';

@Component({
  selector: 'app-dailog-maps',
  templateUrl: './dailog-maps.component.html',
  styleUrls: ['./dailog-maps.component.css']
})
export class DailogMapsComponent  implements OnInit  {

  constructor(
    public dialogRef: MatDialogRef<DailogMapsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDetails,private hostElement: ElementRef) {
    
     
       
     }

     ngOnInit() {
      document.getElementById('googleMap').setAttribute( 'src',this.data.GoogleMap);
      // document.getElementById('googleMap').src=this.data.GoogleMap;
     }

onNoClick(): void {
    this.dialogRef.close();
}
}
