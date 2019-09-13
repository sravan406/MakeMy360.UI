import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { CompanyDetails } from '../../@core/models/admin-models';
import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companyDetails: CompanyDetails;
  constructor(private service:baseService) { }
  
  SaveCopamy()
  {
    this.service.post(Constants.ApiUrl+UrlConstants.companyDetails,this.companyDetails);
  }

  ngOnInit() {
  }

}
