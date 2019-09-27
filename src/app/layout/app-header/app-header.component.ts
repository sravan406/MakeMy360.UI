import { Component,  OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  visibleSidebar:boolean = false;
  @Output() public sidenavToggle = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
}