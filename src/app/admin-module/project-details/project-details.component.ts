import { Component, OnInit } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { ProjectDetails, CompanyDetails, FileToUpload, ProjectHighlights, ProjectType } from '../../@core/models/admin-models';
//import { Constants } from '../../../Constants';
import { UrlConstants } from '../../@core/service-urls.constant';
import { NavbarService } from 'src/app/navbar/navbar-service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';



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
  companyNamesList: any[] = [{ CompanyName: "", CompanyId: 0 }];
  imagedata: FileToUpload[] = [];
  public images: FileToUpload[] = [];
  pointsArray: ProjectHighlights[] = [];
  point: ProjectHighlights = {};
  projectTypeList: ProjectType[] = [{ ProjectType: "", ProjectTypeId: 0 }];
  showBackbtn: boolean = false;

  constructor(private service: baseService, public nav: NavbarService, private datePipe: DatePipe, private _snackBar: MatSnackBar) {
    this.getAllCompanyDetails();
  }

  ngOnInit() {

    this.nav.show();
    this.cols = [
      { header: 'Company Name', field: 'CompanyName' },
      { header: 'Project Name', field: 'ProjectName' },
      { header: 'Location', field: 'Location' },
      { header: 'Path', field: 'SearchId' }
    ];
    this.getAllProjectDetails();
    this.getProjectTypes();
  }

  getProjectTypes() {
    this.service.get(UrlConstants.projectType).subscribe((resp: any[]) => {
      this.projectTypeList = resp;
    });
  }

  getAllProjectDetails() {
    this.service.get(UrlConstants.getAllProjectDetails).subscribe((resp: any[]) => {
      this.projectDetailsList = resp;
    });
  }

  getAllCompanyDetails() {
    this.service.get(UrlConstants.getCompanyDetails).subscribe((resp: any[]) => {
      this.companyNamesList = resp;
    });
  }

  addProject() {
    this.projectDetails = {};
    this.projectDetails.projectHighlights = [];
    this.hideProjectDetails = false;
  }

  addFieldValue() {
    //this.projectDetails.projectHighlights.push(this.point);
    //console.log(this.pointsArray);
    this.pointsArray.push(this.point);
    this.point = {};

  }

  deleteFieldValue(index) {
    this.pointsArray.splice(index, 1);
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

  onSelectInitialFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.projectDetails.ProjectImage = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  saveProject() {
    this.projectDetails.projectHighlights = this.pointsArray;
    // this.projectDetails.ProjectEndDate = this.datePipe.transform(this.projectDetails.ProjectEndDate, "dd-MM-yyyy");
    if (this.companyNamesList.length != 0)
      this.projectDetails.CompanyName = this.companyNamesList.filter(t => t.CompanyId == this.projectDetails.CompanyId)[0].CompanyName;
    this.service.uploadFile(UrlConstants.projectDetails, this.projectDetails).subscribe(resp => {
      this._snackBar.open("Project details saved successfully", "Success!", {
        duration: 200000, verticalPosition: 'top', horizontalPosition: 'end'
      });
      window.location.reload();
      this.hideProjectDetails = true;
    });;

  }

  // selectFolder(e)
  // {
  //   var theFiles = e.target.files;
  // var relativePath = theFiles[0].webkitRelativePath;
  // var folder = relativePath.split("/");
  // alert(folder[0]);
  // }
  updateProject() {

    this.projectDetails.projectHighlights = this.pointsArray;
    this.projectDetails.CompanyName = this.companyNamesList.filter(t => t.value === this.projectDetails.CompanyId)[0].label;
    this.service.put(UrlConstants.updateProjcetInfo, this.projectDetails).subscribe(resp => {
      this.getAllProjectDetails();
      this.hideProjectDetails = true;
    });

  }

  clickOnEdit(data) {

    this.service.get(UrlConstants.getProjectDetailsByProjectId + '/' + data.ProjectId).subscribe((resp: any) => {

      this.projectDetails = resp;
      this.pointsArray = this.projectDetails.projectHighlights;

      this.hideProjectDetails = false;
    });
  }

  downloadImage() {

    window.open(this.projectDetails.ProjectImage, "_blank")
  }

  clickOnDelete() { }

  imagesDetailsUpdated(data) {
    this.imagedata = data;

  }
}
