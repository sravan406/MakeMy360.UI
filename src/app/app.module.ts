import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin-module/admin-module.module';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { baseService } from './@core/data/base-service.service';
import { SidebarModule } from 'ng-sidebar';
import { ButtonModule } from 'primeng/button';
import { ContactComponent } from './contact-us/contact-us.component';
import { ParanomaComponent } from './paranoma-component/paranoma-component.component';
import { DemoMaterialModule } from 'src/common/material.module';
import { DialogModelComponent } from 'src/common/dialog-model/dialog-model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar-service';
import * as $ from 'jquery';
import { AuthenticationService } from './login/AuthenticationService';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderService } from './app-header/app-header-service';
import { AppFooterService } from './app-footer/app-footer.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SiteComponentComponent } from './Site-Layout/site-component/site-component.component';
import { AppLayOutComponent } from './App-Layout/app-lay-out/app-lay-out.component';
import { routing } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogInfoComponent } from 'src/common/dialog-info/dialog-info.component';
import { DialogContactComponent } from 'src/common/dialog-contact/dialog-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    ParanomaComponent,
    DialogModelComponent,
    DashBoardComponent,
    AboutUsComponent,
    AppFooterComponent,
    AppHeaderComponent,
    SiteComponentComponent,
    AppLayOutComponent,
    VirtualTourComponent,
    RequestQuoteComponent,
    DialogInfoComponent,
    DialogContactComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AdminModule,
    routing,
    LoginModule,
    SidebarModule,
    ButtonModule  ,
    DemoMaterialModule,
    DropdownModule
  ],
  providers: [baseService,NavbarService,AuthenticationService,AppHeaderService,AppFooterService],
  bootstrap: [AppComponent],
  entryComponents: [DialogModelComponent, DialogInfoComponent, DialogContactComponent]
})
export class AppModule { }
