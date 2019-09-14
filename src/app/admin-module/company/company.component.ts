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

  public companyDetails: CompanyDetails;
  constructor(private service: baseService) { }

  ngOnInit() {
    this.companyDetails = {
      CompanyName: "",
      CompanyId: 0,
    };
  }

  SaveCopamy() {
    this.service.post(UrlConstants.companyDetails, this.companyDetails);
  }

  GetCompanyDetails() {
    this.service.get(UrlConstants.companyDetails);
  }


}
