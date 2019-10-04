import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { baseService } from '../@core/data/base-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { UserRoutingModule } from './user-module.routing';
import { TableModule } from 'primeng/table';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    DragDropModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    AccordionModule,
    HttpClientModule,
    UserRoutingModule,
    TableModule,
    MatTabsModule
  ],
  exports: [MatTabsModule],
  providers: [baseService],
})
export class UserModule { }
