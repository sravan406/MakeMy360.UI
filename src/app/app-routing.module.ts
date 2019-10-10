import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact-us/contact-us.component';
import { ParanomaComponent } from './paranoma-component/paranoma-component.component';

const routes: Routes = [
  { path: 'contact-us', component: ContactComponent },
  { path: 'paranoma', component: ParanomaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }