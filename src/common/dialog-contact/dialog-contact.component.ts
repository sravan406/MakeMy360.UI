import { Component, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/@core/models/main-models';

@Component({
    selector: 'dialog-contact',
    templateUrl: 'dialog-contact.component.html',
})

export class DialogContactComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogContactComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}