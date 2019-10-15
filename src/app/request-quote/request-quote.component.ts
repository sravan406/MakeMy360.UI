import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar-service';
import { RequestQuoteDetails } from '../@core/models/main-models';
import { baseService } from '../@core/data/base-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UrlConstants } from '../@core/service-urls.constant';
import { ProjectType } from '../@core/models/admin-models';


@Component({
    selector: 'request-quote',
    templateUrl: './request-quote.component.html',
    styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnInit {

    reqDetails: RequestQuoteDetails = {};
    BusinessProfileList: ProjectType[] = [{ ProjectType: "", ProjectTypeId: 0 }];
    TimePeriodList: any[] = [{ TimePeriodId: 1, TimePeriod: "Within one month" },
    { TimePeriodId: 2, TimePeriod: "Within six months" }, { TimePeriodId: 3, TimePeriod: "Within one year" }];
    CountriesList: any[] = [{ CountryName: "India", CountryId: 1 },
    { CountryName: "China", CountryId: 2 }, { CountryName: "United States", CountryId: 3 },
    { CountryName: "Australia", CountryId: 4 }, { CountryName: "Canada", CountryId: 5 }];

    constructor(private nav: NavbarService, private service: baseService, private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.reqDetails.CheckInForOffers = false;
        this.nav.show();
        this.getProjectTypes();
    }

    getProjectTypes() {
        this.service.get(UrlConstants.projectType).subscribe((resp: any[]) => {
            this.BusinessProfileList = resp;
        });
    }

    // toggleEvent() {
    //     this.reqDetails.CheckInForOffers = !this.reqDetails.CheckInForOffers;
    // }

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