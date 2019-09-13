import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CompanyComponent } from 'src/app/admin-module/company/company.component';


const routes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  {path: 'Company',component:CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
