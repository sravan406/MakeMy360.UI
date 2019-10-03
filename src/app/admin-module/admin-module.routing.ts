import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CompanyComponent } from './company/company.component';
import { ParanomaDetailsComponent } from './paranoma-details/paranoma-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ParanomaComponentComponent } from '../paranoma-component/paranoma-component.component';

const routes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'Company', component: CompanyComponent },
  { path: 'project', component: ProjectDetailsComponent },
  { path: 'ParanomaDetails', component: ParanomaDetailsComponent },
  {path:'Paranoma',component:ParanomaComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
