import { Component, OnInit, ViewChild } from '@angular/core';
import { baseService } from '../../@core/data/base-service.service';
import { UrlConstants } from '../../@core/service-urls.constant';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'project-type',
    templateUrl: './project-type.component.html'
})
export class ProjectTypeComponent implements OnInit {
    projectType: string;


    constructor(private service: baseService, private route: ActivatedRoute) { }

    ngOnInit() {

    }

    saveProjectType() {
        this.service.post(UrlConstants.addProjectType, this.projectType).subscribe((resp: any) => {
            //this.customerDetails = resp;
        });
    }

}
