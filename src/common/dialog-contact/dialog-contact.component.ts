import { Component, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDetails } from 'src/app/@core/models/admin-models';

@Component({
    selector: 'dialog-contact',
    templateUrl: 'dialog-contact.component.html',
})

export class DialogContactComponent {
    projectDetails: ProjectDetails = {};

    constructor(
        public dialogRef: MatDialogRef<DialogContactComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ProjectDetails) { }

    ngOnInit() {
        this.projectDetails = this.data;
    }
    
    onNoClick(): void {
        this.dialogRef.close();
    }

    callAction()
    {
        window.location.href="tel:+91"+this.projectDetails.MobileNumber
    }
}