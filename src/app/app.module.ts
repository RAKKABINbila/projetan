import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PublieComponent } from './publie/publie.component';
import { TestComponent } from './test/test.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { MotdepassOublieComponent } from './motdepass-oublie/motdepass-oublie.component';
import { ProfileComponent } from './profile/profile.component';
import { VedioComponent } from './vedio/vedio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublieComponent,
    TestComponent,
    DashbordComponent,
    LoginComponent,
    SignupComponent,
    ForgetPassComponent,
    MotdepassOublieComponent,
    ProfileComponent,
    VedioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
