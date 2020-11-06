import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule ,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from '../../auth2/shared/authconfig.interceptor';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common'

import { OnenewsComponent } from './components/onenews/onenews.component';
import { LatestInterComponent } from './components/latest-inter/latest-inter.component';
import { ReadmoreComponent } from './components/readmore/readmore.component';
import { StickyHeaderDirective } from './sticky-header.directive';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestcontentsComponent } from './components/latestcontents/latestcontents.component';
import { LoginContentComponent } from './components/login-content/login-content.component';
import { SignupContentComponent } from './components/signup-content/signup-content.component';
import { ReadmoreContentComponent } from './components/readmore-content/readmore-content.component';
import { DetailnewsComponent } from './components/detailnews/detailnews.component';



//import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AdminpageComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    OnenewsComponent,
    LatestInterComponent,
    ReadmoreComponent,
    StickyHeaderDirective,
   AddNewsComponent,
   LatestNewsComponent,
   ProfileComponent,
   FooterComponent,
   LatestcontentsComponent,
   LoginContentComponent,
    SignupContentComponent,
    ReadmoreContentComponent,
   DetailnewsComponent,
   
 
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
