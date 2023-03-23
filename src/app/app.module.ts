import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { MyplansComponent } from './myplans/myplans.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { PaymentComponent } from './payment/payment.component';
import { RechargeSuccessfulComponent } from './recharge-successful/recharge-successful.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    PlansComponent,
    MyplansComponent,
    MyprofileComponent,
    SignupComponent,
    FooterComponent,
    BroadbandComponent,
    PaymentComponent,
    RechargeSuccessfulComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
