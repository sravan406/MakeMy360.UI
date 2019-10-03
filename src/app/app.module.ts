import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin-module/admin-module.module';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { baseService } from './@core/data/base-service.service';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { UserModule } from './user-module/user-module.module';
import { SidebarModule } from 'ng-sidebar';
import { ButtonModule } from 'primeng/button';
import { ParanomaComponentComponent } from './paranoma-component/paranoma-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AppHeaderComponent,
    ParanomaComponentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    LoginModule,
    UserModule,
    SidebarModule,
    ButtonModule  
  ],
  providers: [baseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
