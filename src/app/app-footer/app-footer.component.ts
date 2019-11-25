import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavbarService } from '../navbar/navbar-service';
import { baseService } from '../@core/data/base-service.service';
import { UrlConstants } from '../@core/service-urls.constant';
import { Subscriber } from '../@core/models/user-models';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  subscriberData: Subscriber = {};

  constructor(private service: baseService, public nav: NavbarService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onClickSubscribe(){
    this.service.post(UrlConstants.saveSubscriber, this.subscriberData).subscribe(resp => {
      this._snackBar.open("subscribed Successfully", "Success!", {
        duration: 200000, verticalPosition: 'top', horizontalPosition: 'end'
      });
      this.subscriberData = {};
    });
  }
}
