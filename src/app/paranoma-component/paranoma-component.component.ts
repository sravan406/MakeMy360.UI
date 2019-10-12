import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogModelComponent } from 'src/common/dialog-model/dialog-model.component';
import { baseService } from '../@core/data/base-service.service';
import { ActivatedRoute } from '@angular/router';
import { UrlConstants } from '../@core/service-urls.constant';
import { ProjectDetails } from '../@core/models/admin-models';

@Component({
  selector: 'app-paranoma-component',
  templateUrl: './paranoma-component.component.html',
  styleUrls: ['./paranoma-component.component.css']
})
export class ParanomaComponent implements OnInit {
 

  animal: string;
  name: string;
  customerDetails: ProjectDetails = {};
  constructor(public dialog: MatDialog,private service: baseService, private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.params.id;
    this.getProjectDetails(routeParams);
    this.applyStyleForToggleSwitch();
  }
  
  
applyStyleForToggleSwitch()
{
  $('#menu').css("right","-75px");
  $('.menu_icon').on('click',function(){
    if($('.menu_icon').hasClass('open')){
      $(this).removeClass('open');
      $(this).animate({
        "right":"0px",
        "background-position":"0px"
      });
      $('#menu').animate({"right":"-75px"});
     
    }
    else{
      $(this).addClass('open');
      $(this).animate({
        "right":"50px",
        "background-position":"-40px"
      });
      $('#menu').animate({"right":"0px"});
     
    
    }
  });
 

}

  getProjectDetails(id: string) {
    this.service.get(UrlConstants.customerDetailsById + '/' + id).subscribe((resp: any) => {

        this.customerDetails = resp;


    });
}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModelComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



}
