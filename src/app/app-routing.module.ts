import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact-us/contact-us.component';
import { ParanomaComponent } from './paranoma-component/paranoma-component.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SiteComponentComponent } from './Site-Layout/site-component/site-component.component';
import { AppLayOutComponent } from './App-Layout/app-lay-out/app-lay-out.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{
  path: '', 
  component: SiteComponentComponent,
  children: [
    {path:'',component:HomeComponent,pathMatch: 'full'},
    {path:'Home',component:HomeComponent},
    { path: 'contact-us', component: ContactComponent },


  
  ]
},
{
path: 'admin', 
  component: AppLayOutComponent,
  children: [
    {path :'DashBoard',component:DashBoardComponent},


  
  ]
},
  
{ path: 'paranoma/:id', component: ParanomaComponent }

];



export const routing = RouterModule.forRoot(routes);
