import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: HomeComponent },
      { path: 'login-reactive', component: LoginReactiveComponent}
    ])
  ],
  declarations: [

  ],
  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule { }
