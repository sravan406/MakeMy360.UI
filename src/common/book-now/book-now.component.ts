import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../app/navbar/navbar-service';
import { RequestQuoteDetails, BookNowDetails } from '../../app/@core/models/main-models';
import { UrlConstants } from 'src/app/@core/service-urls.constant';
import { baseService } from 'src/app/@core/data/base-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'book-now',
    templateUrl: './book-now.component.html',
    // styleUrls: ['./request-quote.component.css']
})
export class BookNowComponent implements OnInit {

    details: BookNowDetails = {};

    constructor(private nav: NavbarService, private service: baseService, private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.nav.show();
    }

    submit() {
        this.service.post(UrlConstants.submitUserDetails, this.details).subscribe((resp: any) => {
            // if (resp) {
                this._snackBar.open("User Saved Successfully", "Success!", {
                    duration: 20000000,
                });
            //}
        });
    }
}