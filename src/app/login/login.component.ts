import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar-service';
import { Users } from '../@core/models/main-models';
import { AuthenticationService } from './AuthenticationService';
import { UrlConstants } from '../@core/service-urls.constant';
import { baseService } from '../@core/data/base-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token: string;
  users:Users={};

  constructor(public nav:NavbarService,
    private authService:AuthenticationService,
    private service:baseService,
    private router:Router) {

    var getCurrenttoken =localStorage.getItem('token');
    this.token = getCurrenttoken;
   }

  
  ngOnInit() {
    this.nav.hide();
  }

   login()
   {
     this.authService.login(this.users.EmailId,this.users.Pwd).subscribe((resp : any ) => {
      
      if(resp)
      {
        this.token = resp.access_token;
        localStorage.setItem('token', this.token);
        this.getUserDetailsByUserName();
        this.router.navigate(['/DashBoard']);

      }
    
    });
   }

   getUserDetailsByUserName()
   {
    this.service.get(UrlConstants.getUserDetailsByUserName + '/' +this.users.EmailId).subscribe((resp: any) => {

    
      if(resp)
      {
        resp.UserName;
        localStorage.setItem('currentUser',
                   
        JSON.stringify({
             token: this.token,
             userName: resp.UserName,            
              emailId: resp.EmailId
            })
         );

      }

    });
   }

}
