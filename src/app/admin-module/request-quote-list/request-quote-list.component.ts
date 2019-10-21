import { Component, OnInit } from '@angular/core';
import { RequestQuoteDetails } from 'src/app/@core/models/main-models';
import { ProjectType } from 'src/app/@core/models/admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { baseService } from 'src/app/@core/data/base-service.service';
import { UrlConstants } from 'src/app/@core/service-urls.constant';
import { NavbarService } from 'src/app/navbar/navbar-service';

@Component({
    selector: 'request-quote-list',
    templateUrl: './request-quote-list.component.html',
    // styleUrls: ['./request-quote-list.component.css']
})
export class RequestQuoteListComponent implements OnInit {
    cols: any[];
    requestQuoteList: RequestQuoteDetails[] = [];
    reqDetails: RequestQuoteDetails = {};
    hideRequestDetails: boolean = false;
    showBackbtn: boolean = false;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
    BusinessProfileList: ProjectType[] = [{ ProjectType: "", ProjectTypeId: 0 }];
    TimePeriodList: any[] = [{ TimePeriodId: 1, TimePeriod: "Within one month" },
    { TimePeriodId: 2, TimePeriod: "Within six months" }, { TimePeriodId: 3, TimePeriod: "Within one year" }];
    CountriesList: any[] = [{ CountryName: "India", CountryId: 1 },
    { CountryName: "China", CountryId: 2 }, { CountryName: "United States", CountryId: 3 },
    { CountryName: "Australia", CountryId: 4 }, { CountryName: "Canada", CountryId: 5 }];

    constructor(private service: baseService, private _snackBar: MatSnackBar, private nav: NavbarService) {
    }

    ngOnInit() {
        this.nav.show();
        this.cols = [
            { header: 'Name', field: 'CompanyName' },
            { header: 'EmailId', field: 'ProjectName' },
            { header: 'Phone Number', field: 'Location' },
            { header: 'Country', field: 'Location' },
            { header: 'BusinessProfile', field: 'Location' }
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
            this.reqDetails = resp;
        });
    }

    clickOnDelete(){
        
    }
}