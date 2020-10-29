import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { NationalnewsComponent } from './components/nationalnews/nationalnews.component';
import { ArtnewsComponent } from './components/artnews/artnews.component';
import { InternationalnewsComponent } from './components/internationalnews/internationalnews.component';
import { SportnewsComponent } from './components/sportnews/sportnews.component';
import { EconomynewsComponent } from './components/economynews/economynews.component';
import { ReadmoreComponent } from './components/readmore/readmore.component'

//import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  
  {path:'',component:MainpageComponent},
  
  {path:'admin',component:AdminpageComponent},
  {path:'log-in',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  //{ path: 'user-profile/:id', component: UserprofileComponent, canActivate: [AuthGuard] },
  { path: 'user-profile/:id', component: UserprofileComponent },
  { path:'national-news',component:NationalnewsComponent},
  { path:'art-news' , component :ArtnewsComponent},
  { path :'inter-news' , component:InternationalnewsComponent},
  { path :'sport-news',component:SportnewsComponent},
  { path:'economy-news',component:EconomynewsComponent},
  { path:'news',component:ReadmoreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
