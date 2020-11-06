import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


import { ReadmoreComponent } from './components/readmore/readmore.component'
import { ProfileComponent } from './components/profile/profile.component';
import { DetailnewsComponent } from './components/detailnews/detailnews.component'

import { AuthGuard } from "../../auth2/shared/auth.guard";

const routes: Routes = [
  
  {path:'',component:MainpageComponent},
  
  {path:'admin',component:AdminpageComponent},
  {path:'log-in',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent },
  
  { path:'news',component:ReadmoreComponent},
  { path :'detail-news',component:DetailnewsComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
