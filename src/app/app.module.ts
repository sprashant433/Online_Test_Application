import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { QuizdisplayComponent } from './quizdisplay/quizdisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizcontentsService } from './services/quizcontents.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CreateaccountComponent,
    GetstartedComponent,
    QuizhomeComponent,
    QuizdisplayComponent,
    ReviewComponent,
    PrivacyComponent,
    ForgetpassComponent,
    ContactusComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuizcontentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
