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

@NgModule({
  declarations: [FileUploadComponent, CompanyComponent],
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
    CheckboxModule
  ],
  providers: [baseService],
})
export class AdminModule { }
