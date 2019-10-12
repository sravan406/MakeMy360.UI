import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavbarService } from '../navbar/navbar-service';


@Component({
    selector: 'about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

    constructor(private nav: NavbarService) {
    }

    ngOnInit() {
        this.nav.show();
    }
}