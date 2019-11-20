import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookNowDetails } from 'src/app/@core/models/main-models';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'dialog-model',
    templateUrl: 'dialog-model.component.html',
})

export class DialogModelComponent implements OnInit {

    textContent: string ;
    facebookUrl:string;
    whatsAppUrl:string="https://api.whatsapp.com/send?text=";

    constructor(
        public dialogRef: MatDialogRef<DialogModelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: BookNowDetails,public router:Router) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
this.textContent=environment.webApp+this.router.url;

this.facebookUrl="https://www.facebook.com/sharer/sharer.php?u="+this.textContent;
this.whatsAppUrl=this.whatsAppUrl+this.textContent;
    }
}