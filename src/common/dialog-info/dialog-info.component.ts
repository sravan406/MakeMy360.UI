import { Component, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UrlConstants } from 'src/app/@core/service-urls.constant';
import { baseService } from 'src/app/@core/data/base-service.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetails, ProjectHighlights } from 'src/app/@core/models/admin-models';

@Component({
    selector: 'dialog-info',
    templateUrl: 'dialog-info.component.html',
})

export class DialogInfoComponent {
    projectDetails: ProjectDetails = {};
    points: ProjectHighlights[] = [];

    constructor(
        public dialogRef: MatDialogRef<DialogInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ProjectDetails, private service: baseService) { }

    ngOnInit() {
        this.projectDetails = this.data;

        console.log(this.projectDetails.ProjectImage);
        if(this.projectDetails.projectHighlights.length !=0){
            this.points = this.projectDetails.projectHighlights;
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}