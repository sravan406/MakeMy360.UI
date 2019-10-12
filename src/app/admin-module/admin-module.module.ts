import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-module.routing';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { baseService } from '../@core/data/base-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from 'src/app/admin-module/company/company.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ProjectComponent } from './project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParanomaDetailsComponent } from './paranoma-details/paranoma-details.component';
// import { LocationAutocompleteComponent } from 'src/common/location-auto-complete.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectTypeComponent } from './project-type/project-type.component';
import {DatePipe} from '@angular/common';
import { NavbarService } from '../navbar/navbar-service';


@NgModule({
  declarations: [FileUploadComponent, CompanyComponent, ProjectComponent, ParanomaDetailsComponent,
     ProjectDetailsComponent, ProjectTypeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DragDropModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    AccordionModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [baseService, DatePipe,NavbarService],
})
export class AdminModule { }
