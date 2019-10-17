import { Component, OnInit } from '@angular/core';
import { RequestQuoteDetails } from 'src/app/@core/models/main-models';
import { ProjectType } from 'src/app/@core/models/admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { baseService } from 'src/app/@core/data/base-service.service';
import { UrlConstants } from 'src/app/@core/service-urls.constant';

@Component({
    selector: 'request-quote',
    templateUrl: './request-quote.component.html',
    styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnInit {
    cols: any[];
    reqDetails: RequestQuoteDetails = {};
    BusinessProfileList: ProjectType[] = [{ ProjectType: "", ProjectTypeId: 0 }];
    TimePeriodList: any[] = [{ TimePeriodId: 1, TimePeriod: "Within one month" },
    { TimePeriodId: 2, TimePeriod: "Within six months" }, { TimePeriodId: 3, TimePeriod: "Within one year" }];
    CountriesList: any[] = [{ CountryName: "India", CountryId: 1 },
    { CountryName: "China", CountryId: 2 }, { CountryName: "United States", CountryId: 3 },
    { CountryName: "Australia", CountryId: 4 }, { CountryName: "Canada", CountryId: 5 }];

    constructor(private service: baseService, private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.cols = [
            { header: 'Name', field: 'CompanyName' },
            { header: 'EmailId', field: 'ProjectName' },
            { header: 'Phone Number', field: 'Location' },
            { header: 'Country', field: 'Location' },
            { header: 'BusinessProfile', field: 'Location' }
        ];
        this.getRequestQuotesList();
    }

    getRequestQuotesList() {
        this.service.get(UrlConstants.projectType).subscribe((resp: any[]) => {
            this.BusinessProfileList = resp;
        });
    }

    send() {
        this.service.post(UrlConstants.sendRequestQuoteDetails, this.reqDetails).subscribe((resp: any) => {
            // if (resp) {
            this._snackBar.open("Your Request Sent Successfully", "Success!", {
                duration: 20000000,
            });
            //}
        });
    }
}