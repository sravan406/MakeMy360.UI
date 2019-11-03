import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModelComponent } from 'src/common/dialog-model/dialog-model.component';
import { baseService } from '../@core/data/base-service.service';
import { ActivatedRoute } from '@angular/router';
import { UrlConstants } from '../@core/service-urls.constant';
import { ProjectDetails, ProjectHighlights } from '../@core/models/admin-models';
import { DialogInfoComponent } from 'src/common/dialog-info/dialog-info.component';
import { DialogContactComponent } from 'src/common/dialog-contact/dialog-contact.component';
import { BookNowComponent } from 'src/common/book-now/book-now.component';
import { DailogMapsComponent } from 'src/common/dailog-maps/dailog-maps.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paranoma-component',
  templateUrl: './paranoma-component.component.html',
  styleUrls: ['./paranoma-component.component.css']
})
export class ParanomaComponent implements OnInit {

  projectDetails: ProjectDetails = {};
  projectDet: ProjectDetails = {};
  customerDetails: ProjectDetails = {};
  url:SafeResourceUrl;
  showVirtual:boolean=true;
  constructor(public dialog: MatDialog, private service: baseService, 
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private hostElement: ElementRef,
    public router:Router) {


     }

  ngOnInit() {
    const routeParams = this.route.snapshot.params.id;
    this.getProjectDetails(routeParams);
    this.applyStyleForToggleSwitch();
    
  }


  applyStyleForToggleSwitch() {
    $('#menu').css("right", "-75px");
    $('.menu_icon').on('click', function () {
      if ($('.menu_icon').hasClass('open')) {
        $(this).removeClass('open');
        $(this).animate({
          "right": "0px",
          "background-position": "0px"
        });
        $('#menu').animate({ "right": "-75px" });

      }
      else {
        $(this).addClass('open');
        $(this).animate({
          "right": "50px",
          "background-position": "-40px"
        });
        $('#menu').animate({ "right": "0px" });
      }
    });
  }

  getProjectDetails(id: number) {
    this.service.get(UrlConstants.customerDetailsById + '/' + id).subscribe((resp: any) => {
      this.projectDetails = resp;
      
      const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = this.projectDetails.ParanomaPath;
     
    });
  }

  
  toogle(type: string)
  {
    if(type=='video')
    {
      this.showVirtual=false;
    }
    else
    {
     this.showVirtual=true;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModelComponent, {
      width: '350px',
      height: '200px',
      data: this.projectDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectDet = result;
    });
  }

  openInfo(): void {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: this.projectDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectDet = result;
    });
  }
  openBookNow(): void {
    if(this.projectDetails.Website==null && this.projectDetails.Website==undefined)
    {
    const dialogRef = this.dialog.open(BookNowComponent, {
      width: '400px',
      height: '420px',
      data: this.projectDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectDet = result;
    });
  }
  else
  {
    
    this.router.navigate(["/"]).then(result=>{window.open(this.projectDetails.Website);});
   // window.location.href=this.projectDetails.Website;
   // window.open(this.projectDetails.Website, "_blank");
    //window.location.href =this.projectDetails.Website;
   // document.location.href=
  }
  }
  openContact(): void {
    const dialogRef = this.dialog.open(DialogContactComponent, {
      width: '360px',
      height: '280px',
      data: this.projectDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectDet = result;
    });
  }

  openMaps(): void {
    const dialogRef = this.dialog.open(DailogMapsComponent, {
      width: '400',
      height: '300',
      data: this.projectDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectDet = result;
    });
  }


}


