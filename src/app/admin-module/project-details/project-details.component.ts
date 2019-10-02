import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { ProjectDetails, CompanyDetails, FileToUpload } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectDetails: ProjectDetails = {};
    cols: any[];
    projectDetailsList: ProjectDetails[] = [];
    hideProjectDetails: boolean = true;
    showFilter: boolean = false;
    showSavebtn: boolean = false;
    companyNamesList: any[]=[];
    imagedata:FileToUpload[]=[];
    public images: FileToUpload[] = [];

    constructor(private service: baseService) { 
        this.getAllCompanyDetails();
    }

    ngOnInit() {
        

        this.cols = [
            { header: 'Company Name', field: 'companyName' },
            { header: 'Project Name', field: 'projectName' },
            { header: 'Location', field: 'location' }
        ];

        this.projectDetailsList = [{ companyName: "icici", projectName: "Ecolab", location: "Pune" }, { companyName: "ggk", projectName: "Ktc", location: "Hyderabad" },
        { companyName: "infosys", projectName: "State project", location: "Bangalore" }, { companyName: "value labs", projectName: "Krishnapatnam", location: "Chennai" },
        { companyName: "capgemini", projectName: "Water Board", location: "Hyderabad" }]

        
      
    }

    getAllCompanyDetails()
    {
        this.service.get(UrlConstants.getCompanyDetails).subscribe((resp : any[]) => {
           
            for(let i=0;i<=resp.length;i++)
           {
                this.companyNamesList.push({label:resp[i].CompanyName,value:resp[i].CompanyId});
           }
          });
    }

    addProject() {
      this.projectDetails={};  
        this.hideProjectDetails = false;
    }

    // onSelectFile(event) {
    //   if (event.target.files && event.target.files[0]) {
    //     var filesAmount = event.target.files.length;
    //     for (let i = 0; i < filesAmount; i++) {
    //       var reader = new FileReader();
    //       var fileName = event.target.files[i].name;
    //       reader.onload = (event: any) => {
    //         this.images.push({
    //           data: event.target.result, fileName: fileName, fileAsBase64: event.target.result
    //         });
    //       }
    //       reader.readAsDataURL(event.target.files[i]);
    //     }
    //   }
    // }

    onSelectInitialFile(event)
    {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
        this.projectDetails.ProjectImage=event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    saveProject() {
       // this.projectDetails.images =  this.images;
        this.service.uploadFile(UrlConstants.projectDetails, this.projectDetails);
        this.hideProjectDetails = true;
    }

    // selectFolder(e)
    // {
    //   var theFiles = e.target.files;
    // var relativePath = theFiles[0].webkitRelativePath;
    // var folder = relativePath.split("/");
    // alert(folder[0]);
    // }
    updateProject() { }

    clickOnEdit(data) {
        this.projectDetails = data;
    }

    clickOnDelete() { }

    imagesDetailsUpdated(data){
        this.imagedata =  data;

    }

}
