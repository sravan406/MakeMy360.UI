import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-module.routing';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DragDropModule
  ]
})
export class AdminModule { }
