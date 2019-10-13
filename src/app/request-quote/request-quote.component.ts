import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar-service';
import { RequestQuoteDetails } from '../@core/models/main-models';


@Component({
    selector: 'request-quote',
    templateUrl: './request-quote.component.html',
    styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnInit {

    requestQuote: RequestQuoteDetails = {};

    constructor(private nav: NavbarService) {
    }

    ngOnInit() {
        this.nav.show();
    }
}