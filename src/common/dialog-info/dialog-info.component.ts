import { Component, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/@core/models/main-models';

@Component({
    selector: 'dialog-info',
    templateUrl: 'dialog-info.component.html',
})

export class DialogInfoComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}