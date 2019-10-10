import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;

  constructor() { this.visible = false; }

  hide() { this.visible = false; 

    console.log($('#routeroutlet')); 
    $("#routeroutlet").removeAttr("style");
}

  show() { this.visible = true; }





}