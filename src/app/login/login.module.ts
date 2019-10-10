import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { routing } from './login-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule,
    ],
    declarations: [
        LoginComponent,
    ]
})
export class LoginModule { }