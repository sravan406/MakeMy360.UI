import { Component, OnInit } from '@angular/core';
import { RequestQuoteDetails, BookNowDetails } from 'src/app/@core/models/main-models';
import { ProjectType } from 'src/app/@core/models/admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { baseService } from 'src/app/@core/data/base-service.service';
import { UrlConstants } from 'src/app/@core/service-urls.constant';

@Component({
    selector: 'book-now-users-list',
    templateUrl: './book-now-users-list.component.html',
    // styleUrls: ['./request-quote-list.component.css']
})
export class BookNowUsersListComponent implements OnInit {
    cols: any[];
    requestQuoteList: RequestQuoteDetails[] = [];
    details: BookNowDetails = {};
    hideBookNowDetails: boolean = true;
    showBackbtn: boolean = false;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
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
            { header: 'Name', field: 'Name' },
            { header: 'Email Id', field: 'EmailId' },
            { header: 'Phone Number', field: 'PhoneNumber' },
            { header: 'IsContacted', field: 'IsContacted' }
        ];
        this.getAllRequestQuotesDetails();
    }

    getAllRequestQuotesDetails() {
        this.service.get(UrlConstants.getAllRequestQuoteDetails).subscribe((resp: any[]) => {
            this.requestQuoteList = resp;
        });
    }

    clickOnEdit(data) {
        this.service.get(UrlConstants.getAllRequestQuoteDetailsById + '/' + data.RequestQuoteId).subscribe((resp: any) => {
            this.details = resp;
        });
    }

    clickOnDelete(){
        
    }
}