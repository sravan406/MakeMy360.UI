import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar-service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
