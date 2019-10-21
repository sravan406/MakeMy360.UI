import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { ProjectDetails } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-paranoma-details',
    templateUrl: './paranoma-details.component.html',
    styleUrls: ['./paranoma-details.component.css']

})
export class ParanomaDetailsComponent implements OnInit {

    projectDetails: ProjectDetails = {};
    cols: any[];
    projectDetailsList: ProjectDetails[] = [];
    hideProjectDetails: boolean = true;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
    showBackbtn: boolean = false;
    
    constructor(private service: baseService,private route: ActivatedRoute) { }

    ngOnInit() {

        this.cols = [
            { header: 'Company Name', field: 'CompanyName' },
            { header: 'Project Name', field: 'projectName' },
            { header: 'Location', field: 'location' }
        ];

        this.getAllProjectDetails();
        this.route.paramMap.subscribe(params => {
            console.log(params);
        });
        console.log(this.projectDetailsList);
        // this.service.get(UrlConstants.getCompanyDetails).subscribe(resp => {
        //   this.companyDetailsList =  resp;
        // });
    }

    getAllProjectDetails() {
        this.service.get(UrlConstants.getAllProjectDetails).subscribe((resp: any[]) => {
            this.projectDetailsList = resp;
        });
    }

    addProject() {
        this.hideProjectDetails = false;
    }

    saveProject() {
        this.service.post(UrlConstants.projectDetails, this.projectDetails);
        this.hideProjectDetails = true;
    }

    updateProject() { }

    clickOnEdit(data) {
        this.projectDetails = data;
    }

    clickOnDelete() { }

    imagesDetailsUpdated(data) {

    }
}
