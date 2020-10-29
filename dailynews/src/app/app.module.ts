import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule ,  HTTP_INTERCEPTORS} from '@angular/common/http';
//import { AuthInterceptor } from './shared/auth.interceptor';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InternationalnewsComponent } from './components/internationalnews/internationalnews.component';
import { NationalnewsComponent } from './components/nationalnews/nationalnews.component';
import { EconomynewsComponent } from './components/economynews/economynews.component';
import { SportnewsComponent } from './components/sportnews/sportnews.component';
import { ArtnewsComponent } from './components/artnews/artnews.component';


import { OnenewsComponent } from './components/onenews/onenews.component';
import { LatestInterComponent } from './components/latest-inter/latest-inter.component';
import { ReadmoreComponent } from './components/readmore/readmore.component';
import { StickyHeaderDirective } from './sticky-header.directive';


//import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AdminpageComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UserprofileComponent,
    InternationalnewsComponent,
    NationalnewsComponent,
    EconomynewsComponent,
    SportnewsComponent,
    ArtnewsComponent,
   
    OnenewsComponent,
   
    LatestInterComponent,
   
    ReadmoreComponent,
   
    StickyHeaderDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //MDBBootstrapModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
