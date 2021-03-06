import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../app/navbar/navbar-service';
import { RequestQuoteDetails, BookNowDetails } from '../../app/@core/models/main-models';
import { UrlConstants } from 'src/app/@core/service-urls.constant';
import { baseService } from 'src/app/@core/data/base-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDetails } from 'src/app/@core/models/admin-models';

@Component({
    selector: 'book-now',
    templateUrl: './book-now.component.html',
    // styleUrls: ['./request-quote.component.css']
})
export class BookNowComponent implements OnInit {
    details: BookNowDetails = {};

    constructor(public dialogRef: MatDialogRef<BookNowComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ProjectDetails, private nav: NavbarService, private service: baseService, private _snackBar: MatSnackBar) {
    }
    ngOnInit() {

    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    submit() {
        this.details.ProjectId=this.data.ProjectId;
        this.service.post(UrlConstants.submitUserDetails, this.details).subscribe((resp: any) => {
            // if (resp) {
            this._snackBar.open("User Saved Successfully", "Success!", {
                duration: 20000000, verticalPosition: 'top', horizontalPosition: 'end'
            });
            //}
        });
    }
}