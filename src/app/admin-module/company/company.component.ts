import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { CompanyDetails } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';
import { Location } from '@angular/common';

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
  showFilter: boolean = false;
  showSavebtn: boolean = false;

  constructor(private service: baseService, private _location: Location) { }

  ngOnInit() {

    this.cols = [
      { header: 'Company Name', field: 'CompanyName' }
    ];

    // this.companyDetailsList = [{ companyName: "icici" },
    //  { companyName: "abc" },
    // { companyName: "hdfc" }, 
    // { companyName: "abc" },
    // { companyName: "ggk" }]


    this.getCompanyDetails();
  }


  getCompanyDetails()
  {
    this.service.get(UrlConstants.getCompanyDetails).subscribe((resp:any[]) => {
    
      this.companyDetailsList=resp;
     

    });
  }

  addCompany() {
    this.companyDetails={};
    this.hideCompanyDetails = false;
  }

  saveCompany() {
    this.service.post(UrlConstants.companyDetails, this.companyDetails).subscribe((resp:any[]) => {
      this.getCompanyDetails();
      this.hideCompanyDetails = true;
    });
        
    
  }

  updateCompany()
  {
    this.service.put(UrlConstants.companyDetails, this.companyDetails).subscribe((resp=>{
      this.getCompanyDetails();
      this.hideCompanyDetails = true;    

    }));
    
   
  }
  clickOnEdit(data) {
    this.companyDetails = data;
  }
  clickOnDelete() { }

}
