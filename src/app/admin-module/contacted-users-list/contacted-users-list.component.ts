import { Component, OnInit } from '@angular/core';
import { ContactDetails } from 'src/app/@core/models/main-models';
import { ProjectType } from 'src/app/@core/models/admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { baseService } from 'src/app/@core/data/base-service.service';
import { UrlConstants } from 'src/app/@core/service-urls.constant';
import { NavbarService } from 'src/app/navbar/navbar-service';

@Component({
    selector: 'contacted-users-list',
    templateUrl: './contacted-users-list.component.html',
    // styleUrls: ['./request-quote-list.component.css']
})
export class ContactUsersListComponent implements OnInit {
    cols: any[];
    contactedusersList: ContactDetails[] = [];
    details: ContactDetails = {};
    hideContactDetails: boolean = false;
    showBackbtn: boolean = false;
    showFilter: boolean = false;
    showSavebtn: boolean = false;

    constructor(private service: baseService, private _snackBar: MatSnackBar, private nav: NavbarService) {
    }

    ngOnInit() {
        this.nav.show();
        this.cols = [
            { header: 'Name', field: 'Name' },
            { header: 'Email Id', field: 'EmailId' },
            { header: 'Phone Number', field: 'PhoneNumber' },
            { header: 'IsContacted', field: 'IsContacted' }
        ];
        this.getAllContactedUsers();
    }

    getAllContactedUsers() {
        this.service.get(UrlConstants.getAllContactUsDetails).subscribe((resp: any[]) => {
            this.contactedusersList = resp;
        });
    }

    clickOnEdit(data) {
        this.service.get(UrlConstants.getContactDetailsById + '/' + data.UserId).subscribe((resp: any) => {
            this.details = resp;
        });
    }

    update() {
        this.service.post(UrlConstants.updateContactedUserDetails, this.details).subscribe((resp: any) => {
            if (resp == null) {
                this._snackBar.open("User updated Successfully", "Success!", {
                    duration: 20000000, verticalPosition: 'top', horizontalPosition: 'end'
                });
                this.hideContactDetails = false;
            }
            this.getAllContactedUsers();
        });
    }
}