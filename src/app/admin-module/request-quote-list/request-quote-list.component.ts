import { Component, OnInit } from '@angular/core';
import { RequestQuoteDetails } from 'src/app/@core/models/main-models';
import { ProjectType } from 'src/app/@core/models/admin-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { baseService } from 'src/app/@core/data/base-service.service';
import { UrlConstants } from 'src/app/@core/service-urls.constant';
import { NavbarService } from 'src/app/navbar/navbar-service';
import { DatePipe } from '@angular/common';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

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
    projectTypeList: ProjectType[] = [{ ProjectType: "", ProjectTypeId: 0 }];

    constructor(private service: baseService, private _snackBar: MatSnackBar, private nav: NavbarService, private datePipe: DatePipe) {
    }

    ngOnInit() {
        this.nav.show();
        this.cols = [
            { header: 'Name', field: 'Name' },
            { header: 'Email Id', field: 'EmailId' },
            { header: 'Phone Number', field: 'PhoneNumber' },
            { header: 'Project Type', field: 'BusinessProfile' },
            { header: 'Created Date', field: 'CreatedDate' },
            { header: 'Is Contacted', field: 'IsContacted' }
        ];
        this.getProjectTypes();
        this.getAllRequestQuotesDetails();
    }

    getProjectTypes() {
        this.service.get(UrlConstants.projectType).subscribe((resp: any[]) => {
            this.projectTypeList = resp;
        });
    }

    getAllRequestQuotesDetails() {
        this.service.get(UrlConstants.getAllRequestQuoteDetails).subscribe((resp: any[]) => {
            this.requestQuoteList = resp;
            this.requestQuoteList.forEach(data => {
                data.CreatedDate = this.datePipe.transform(data.CreatedDate, "dd/MM/yyyy");
                data.BusinessProfile = this.projectTypeList.filter(item => item.ProjectTypeId == data.BusinessProfileId)[0].ProjectType;
            });
        });
    }

    clickOnEdit(data) {
        this.service.get(UrlConstants.getRequestQuoteDetailsById + '/' + data.RequestQuoteId).subscribe((resp: any) => {
            this.reqDetails = resp;
            this.reqDetails.BusinessProfile = this.projectTypeList.filter(item => item.ProjectTypeId == this.reqDetails.BusinessProfileId)[0].ProjectType;
        });
    }

    clickOnDelete() {

    }

    update() {
        this.service.post(UrlConstants.updateRequestQuoteDetails, this.reqDetails).subscribe((resp: any) => {
            // if (resp) {
                this._snackBar.open("Your Request Sent Successfully", "Success!", {
                    duration: 20000000,
                });
            // }
            this.hideRequestDetails = false;
        });
    }
}