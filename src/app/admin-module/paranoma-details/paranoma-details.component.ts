import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { ProjectDetails } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';

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

    constructor(private service: baseService) { }

    ngOnInit() {

        this.cols = [
            { header: 'Company Name', field: 'companyName' },
            { header: 'Project Name', field: 'projectName' },
            { header: 'Location', field: 'location' }
        ];

        this.projectDetailsList = [{ companyName: "icici", projectName: "Ecolab", location: "Pune" }, { companyName: "ggk", projectName: "Ktc", location: "Hyderabad" },
        { companyName: "infosys", projectName: "State project", location: "Bangalore" }, { companyName: "value labs", projectName: "Krishnapatnam", location: "Chennai" },
        { companyName: "capgemini", projectName: "Water Board", location: "Hyderabad" }]

        console.log(this.projectDetailsList);
        // this.service.get(UrlConstants.getCompanyDetails).subscribe(resp => {
        //   this.companyDetailsList =  resp;
        // });
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

    imagesDetailsUpdated(data){

    }
}
