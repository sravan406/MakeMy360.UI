import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CompanyComponent } from './company/company.component';
import { ParanomaDetailsComponent } from './paranoma-details/paranoma-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { AppLayOutComponent } from '../App-Layout/app-lay-out/app-lay-out.component';

const routes: Routes = [
  {
  path: 'admin', 
  component: AppLayOutComponent,
  children:[
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'Company', component: CompanyComponent },
  { path: 'project', component: ProjectDetailsComponent },
  { path: 'project-type', component: ProjectTypeComponent },
  { path: 'ParanomaDetails', component: ParanomaDetailsComponent }
  ]

  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
