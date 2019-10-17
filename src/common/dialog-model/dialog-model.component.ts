import { Component, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookNowDetails } from 'src/app/@core/models/main-models';

@Component({
    selector: 'dialog-model',
    templateUrl: 'dialog-model.component.html',
})

export class DialogModelComponent {
    textContent: string = "http://makemy360.in/5c3755ec6637290ecd59c24b";
    constructor(
        public dialogRef: MatDialogRef<DialogModelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: BookNowDetails) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}