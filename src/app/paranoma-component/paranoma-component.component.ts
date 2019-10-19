import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-paranoma-component',
  templateUrl: './paranoma-component.component.html',
  styleUrls: ['./paranoma-component.component.css']
})
export class ParanomaComponent implements OnInit {

  projectDetails: ProjectDetails = {};
  projectDet: ProjectDetails = {};
  customerDetails: ProjectDetails = {};
  constructor(public dialog: MatDialog, private service: baseService, private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = parseInt(this.route.snapshot.params.id);
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
    this.service.get(UrlConstants.getProjectDetailsByProjectId + '/' + id).subscribe((resp: any) => {
      this.projectDetails = resp;
    });
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
    const dialogRef = this.dialog.open(BookNowComponent, {
      width: '400px',
      height: '420px',
      data: this.projectDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectDet = result;
    });
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


