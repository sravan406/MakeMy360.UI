import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar-service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
