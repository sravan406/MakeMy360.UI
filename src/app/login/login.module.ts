import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { loginrouting } from './login-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        loginrouting,
        FormsModule,
    ],
    declarations: [
        LoginComponent,
    ]
})
export class LoginModule { }