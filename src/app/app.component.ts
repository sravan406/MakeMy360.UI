import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar/navbar-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MakeMy360';

  constructor(public nav:NavbarService)
  {

  }

  ngOnInit() {

var navbar=this.nav.visible;
    console.log(navbar);
  }

  
}
