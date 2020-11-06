import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }  from '@angular/router'
import { AuthService } from '../../../../auth2/shared/auth.service';
@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.css']
})
export class LoginContentComponent implements OnInit {

  email:string="";
  password:string="";
 constructor(private http:HttpClient , private router:Router ,private authService:AuthService) { }

 ngOnInit(): void {
 }
  login(){
    let user={
      email:this.email,
      password:this.password
    }
    this.authService.signIn(user)
  }
  goToSignUp(){
    this.router.navigate(['','sign-up'])
  }

}
