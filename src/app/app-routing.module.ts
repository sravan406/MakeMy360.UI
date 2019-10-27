import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact-us/contact-us.component';
import { ParanomaComponent } from './paranoma-component/paranoma-component.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SiteComponentComponent } from './Site-Layout/site-component/site-component.component';
import { AppLayOutComponent } from './App-Layout/app-lay-out/app-lay-out.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { BookNowComponent } from '../common/book-now/book-now.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


const routes: Routes = [
  {
    path: '',
    component: SiteComponentComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'About-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'Request-Quote', component: RequestQuoteComponent },
      { path: 'Virtual-tour', component: VirtualTourComponent },
      { path: 'Book-now', component: BookNowComponent }
    ]
  },
  {
    path: 'admin',
    component: AppLayOutComponent,
    children: [
      { path: 'DashBoard', component: DashBoardComponent },



    ]
  },

  { path: 'paranoma/:id', component: ParanomaComponent },
  
  { path: 'ComingSoon', component: ComingSoonComponent }


];



export const routing = RouterModule.forRoot(routes);
