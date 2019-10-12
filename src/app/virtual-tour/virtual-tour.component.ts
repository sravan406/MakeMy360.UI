import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar-service';


@Component({
    selector: 'virtual-tour',
    templateUrl: './virtual-tour.component.html',
    styleUrls: ['./virtual-tour.component.css']
})
export class VirtualTourComponent implements OnInit {

    constructor(private nav: NavbarService) {
    }

    ngOnInit() {
        this.nav.show();
    }
}