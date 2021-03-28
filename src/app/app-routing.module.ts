import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { CreateaccountComponent } from "./createaccount/createaccount.component";
import { GetstartedComponent } from "./getstarted/getstarted.component";
import { QuizhomeComponent } from "./quizhome/quizhome.component";
import { QuizdisplayComponent } from "./quizdisplay/quizdisplay.component";
import { ReviewComponent } from './review/review.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [

  { path:'',component:HomeComponent},
  { path:'create',component:CreateaccountComponent},
  { path:'about',component:AboutComponent},
  { path:'forget',component:ForgetpassComponent},
  { path:'getstart',component:GetstartedComponent},
  { path:'quizhome',component:QuizhomeComponent},
  { path:'contactus',component:ContactusComponent},
  { path:'privacy',component:PrivacyComponent},
  { path:'quizdisplay',component:QuizdisplayComponent},
  { path:'review',component:ReviewComponent},
  { path:'**',component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
