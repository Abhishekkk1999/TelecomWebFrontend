import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { MyplansComponent } from './myplans/myplans.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { PaymentComponent } from './payment/payment.component';
import { RechargeSuccessfulComponent } from './recharge-successful/recharge-successful.component'



const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"plans", component:PlansComponent},
  {path:"myplans", component:MyplansComponent},
  {path:"myprofile", component:MyprofileComponent},
  {path:"signup", component:SignupComponent},
  {path:"footer", component:FooterComponent},
  {path:"broadband", component:BroadbandComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"payment", component: PaymentComponent},
  {path:"recharge-successful", component: RechargeSuccessfulComponent},
  

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
