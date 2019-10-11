import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact-us/contact-us.component';
import { ParanomaComponent } from './paranoma-component/paranoma-component.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'contact-us', component: ContactComponent },
  { path: 'paranoma', component: ParanomaComponent },
  { path: 'DashBoard', component: DashBoardComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }