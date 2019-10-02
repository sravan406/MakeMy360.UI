import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { UrlConstants } from '../../@core/service-urls.constant';
import { CustomerDetails } from 'src/app/@core/models/user-models';
import {MenuItem} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    customerDetails: any = {};
    cols: any[];
    customerDetailsList: CustomerDetails[] = [];
    hideCustomerDetails: boolean = true;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
    companyNamesList: any[];
    imagedata:any[];
    items: MenuItem[];

    constructor(private service: baseService,private route: ActivatedRoute) { }

    ngOnInit() {

        const routeParams = this.route.snapshot.params.id;

console.log(routeParams);

        this.items = [
            {label: 'Paranoma', icon: 'fa fa-fw fa-support'},
            {label: 'Video', icon: 'fa fa-fw fa-twitter'}
        ];

        this.getProjectDetails(routeParams);
        
        // this.service.get(UrlConstants.getCompanyDetails).subscribe(resp => {
        //   this.companyDetailsList =  resp;
        // });
    }

    toggleTabs(evt, action)
    {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(action).style.display = "block";
        evt.currentTarget.className += " active";
    }
   getProjectDetails(id:string)
   {
    this.service.get(UrlConstants.customerDetailsById+'/'+id).subscribe((resp:any) => {
    
       this.customerDetails=resp;
       
  
      });
   }
    
}
