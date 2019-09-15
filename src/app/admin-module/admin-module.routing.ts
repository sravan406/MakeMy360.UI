import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CompanyComponent } from './company/company.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'Company', component: CompanyComponent },
  { path: 'project', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
