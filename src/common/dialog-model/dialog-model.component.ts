import { Component, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/@core/models/main-models';

@Component({
    selector: 'dialog-model',
    templateUrl: 'dialog-model.component.html',
})

export class DialogModelComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogModelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}