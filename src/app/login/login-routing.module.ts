import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';

// Routes
export const routes: Routes = [
    {path:'login',component:LoginComponent}
];
export const loginrouting = RouterModule.forChild(routes);