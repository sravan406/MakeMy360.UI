import { Component, OnInit } from '@angular/core';
import { baseService } from '../@core/data/base-service.service';
import { ContactDetails } from '../@core/models/main-models';

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactComponent implements OnInit {

    contactDet: ContactDetails = {
        name: "",
        emailId: "",
        mobileNumber: null,
        message: ""
    };

    constructor(private service: baseService) {
        // this.getAllCompanyDetails();
    }

    ngOnInit() {

    }

    saveContact() {
        // this.service.post(UrlConstants.getCompanyDetails).subscribe((resp: any[]) => {
        // });
    }

    // getAllCompanyDetails() {
    //     this.service.get(UrlConstants.getCompanyDetails).subscribe((resp: any[]) => {
    //         for (let i = 0; i <= resp.length; i++) {
    //             this.companyNamesList.push({ label: resp[i].CompanyName, value: resp[i].CompanyId });
    //         }
    //     });
    // }
}
