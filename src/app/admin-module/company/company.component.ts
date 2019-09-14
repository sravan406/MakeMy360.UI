import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { CompanyDetails } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyDetails: CompanyDetails = {};
  cols: any[];
  companyDetailsList: CompanyDetails[] = [];
  hideCompanyDetails: boolean = true;

  constructor(private service: baseService) { }

  ngOnInit() {

    this.cols = [
      { header: 'Company Name', field: 'companyName' },
      { header: 'Established Year', field: 'establishedYear' },
      { header: 'Is Active', field: 'isActive' }
    ];
    
    this.companyDetailsList = [{companyName:"icici", establishedYear:1989, isActive:true},{companyName:"abc", establishedYear:2019, isActive:true},
    {companyName:"hdfc", establishedYear:2000, isActive:false},{companyName:"abc", establishedYear:2019, isActive:true},
    {companyName:"ggk", establishedYear:2019, isActive:true}]

    console.log(this.companyDetailsList);
    // this.service.get(UrlConstants.getCompanyDetails).subscribe(resp => {
    //   this.companyDetailsList =  resp;
    // });
  }

  addCompany(){
    this.hideCompanyDetails = false;
  }
  saveCompany() {
    this.service.post(UrlConstants.companyDetails, this.companyDetails);
    this.hideCompanyDetails = true;
  }

  GetCompanyDetails() {
    this.service.get(UrlConstants.companyDetails);
  }


}
