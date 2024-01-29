import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublieComponent } from './publie/publie.component';

import { TestComponent } from './test/test.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MotdepassOublieComponent } from './motdepass-oublie/motdepass-oublie.component';
import { profileEnd } from 'node:console';
import { ProfileComponent } from './profile/profile.component';
import { VedioComponent } from './vedio/vedio.component';

const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"publie",component:PublieComponent},
  {path:"test",component:TestComponent},
  {path:"dashbord",component:DashbordComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"motdepass_oublie",component:MotdepassOublieComponent},
  {path:"profile",component:ProfileComponent},
  {path:"vedio",component:VedioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
