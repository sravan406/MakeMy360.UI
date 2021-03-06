import { Component, OnInit } from '@angular/core';
import { baseService } from '../@core/data/base-service.service';
import { UrlConstants } from '../@core/service-urls.constant';
import { ProjectDetails } from '../@core/models/admin-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projectDetailsList: ProjectDetails[] = [];
  showTextBlock: boolean = false;

  constructor(public service: baseService, private router: Router) { }

  ngOnInit() {
    this.getProtfolioDetails();
  }

  getProtfolioDetails() {
    this.service.get(UrlConstants.getAllPortfolioDetails).subscribe((resp: any[]) => {
      this.projectDetailsList = resp;
      console.log(this.projectDetailsList);
    });
  }

  onImageClick(data) {
    this.router.navigate(['paranoma', data]);
  }
}
