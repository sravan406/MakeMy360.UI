import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { ProjectDetails, CompanyDetails, FileToUpload } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    projectDetails: ProjectDetails = {};
    cols: any[];
    projectDetailsList: ProjectDetails[] = [];
    hideProjectDetails: boolean = true;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
    companyNamesList: any[] = [];
    projectTypeList: any[] = [];
    imagedata: FileToUpload[] = [];

    constructor(private service: baseService) {
        this.getAllCompanyDetails();
        this.getAllProjectDetails();
    }

    ngOnInit() {


        this.cols = [
            { header: 'Company Name', field: 'companyName' },
            { header: 'Project Name', field: 'projectName' },
            { header: 'Location', field: 'location' }
        ];

        this.projectDetailsList = [{ CompanyName: "icici", ProjectName: "Ecolab", Location: "Pune" }, { CompanyName: "ggk", ProjectName: "Ktc", Location: "Hyderabad" },
        { CompanyName: "infosys", ProjectName: "State project", Location: "Bangalore" }, { CompanyName: "value labs", ProjectName: "Krishnapatnam", Location: "Chennai" },
        { CompanyName: "capgemini", ProjectName: "Water Board", Location: "Hyderabad" }]



    }

    getAllCompanyDetails() {
        this.service.get(UrlConstants.getCompanyDetails).subscribe((resp: any[]) => {
            for (let i = 0; i <= resp.length; i++) {
                this.companyNamesList.push({ label: resp[i].CompanyName, value: resp[i].CompanyId });
            }
        });
    }

    getAllProjectDetails() {
        this.service.get(UrlConstants.projectType).subscribe((resp: any[]) => {
            resp.forEach(element => {
                this.projectTypeList.push({ label: element.ProjectType, value: element.ProjectTypeId });
            });
        });
    }

    addProject() {
        this.projectDetails = {};
        this.hideProjectDetails = false;
    }

    saveProject() {
        this.projectDetails.images = this.imagedata;
        this.service.uploadFile(UrlConstants.projectDetails, this.projectDetails);
        this.hideProjectDetails = true;
    }

    updateProject() { }

    clickOnEdit(data) {
        this.projectDetails = data;
    }

    clickOnDelete() { }

    imagesDetailsUpdated(data) {
        this.imagedata = data;

    }
}
