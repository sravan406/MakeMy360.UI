import { Component, OnInit } from '@angular/core';
import { baseService } from '../@core/data/base-service.service';
import { ContactDetails } from '../@core/models/main-models';
import { UrlConstants } from '../@core/service-urls.constant';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactComponent implements OnInit {

    submitted: boolean = false;
    contactDet: ContactDetails = {};

    constructor(private service: baseService, private _snackBar: MatSnackBar) {
        // this.getAllCompanyDetails();
    }

    ngOnInit() {

    }

    saveContact() {
        this.service.post(UrlConstants.addContactUsDetails, this.contactDet).subscribe((resp: any[]) => {
            if (resp == null) {
                this._snackBar.open("Details saved successfully", "Success!", {
                    duration: 20000000, verticalPosition: 'top', horizontalPosition: 'end'
                });
                this.contactDet = {};
                this.submitted = false;
            }
        });
    }

    updateContact() {
        this.service.post(UrlConstants.addContactUsDetails, this.contactDet).subscribe((resp: any[]) => {
            if (resp == null) {
                this._snackBar.open("Details saved successfully", "Success!", {
                    duration: 20000000, verticalPosition: 'top', horizontalPosition: 'end'
                });
            }
        });
    }
}
