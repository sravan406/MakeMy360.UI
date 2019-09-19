import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { UrlConstants } from '../../@core/service-urls.constant';
import { CustomerDetails } from 'src/app/@core/models/user-models';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    customerDetails: CustomerDetails = {};
    cols: any[];
    customerDetailsList: CustomerDetails[] = [];
    hideCustomerDetails: boolean = true;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
    companyNamesList: any[];
    imagedata:any[];
    items: MenuItem[];

    constructor(private service: baseService) { }

    ngOnInit() {
        this.items = [
            {label: 'Paranoma', icon: 'fa fa-fw fa-support'},
            {label: 'Video', icon: 'fa fa-fw fa-twitter'}
        ];

        this.customerDetails.companyName = "GGK";
        this.customerDetails.projectName = "Kentucky";
        this.customerDetails.location = "Hyderabad";
        
        // this.service.get(UrlConstants.getCompanyDetails).subscribe(resp => {
        //   this.companyDetailsList =  resp;
        // });
    }

    addProject() {
        this.hideCustomerDetails = false;
    }

    saveProject() {
        this.customerDetails.images =  this.imagedata;
        this.service.post(UrlConstants.projectDetails, this.customerDetails);
        this.hideCustomerDetails = true;
    }

    updateProject() { }

    clickOnEdit(data) {
        this.customerDetails = data;
    }

    clickOnDelete() { }

    imagesDetailsUpdated(data){
        this.imagedata =  data;

    }
}
