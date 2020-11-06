import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(
    private http: HttpClient,
    public router: Router,
    private _location:Location
  ) {}
  
endpoint: string = 'http://localhost:3000';
  profile:any={}
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  signedIn:boolean=false;

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user) {
    return this.http.post<any>(`http://localhost:3000/login/sendLogin`, user)
      .subscribe((res: any) => {
      
        localStorage.setItem('access_token', res.token)
       
        
        this.getUserProfile(res.msg._id).subscribe((res) => {
        
          this.currentUser = res;
          this.signedIn=true;
          if (res.msg.role===1){
            this.router.navigate(['admin'])
          }else {
          this.router.navigate(['profile/' + res.msg._id]);
          //this._location.back();
        }
        })
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.signedIn=false
      window.location.reload();
      //this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `http://localhost:3000/login/profiles/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
  getProfileData(id){
    let api=`http://localhost:3000/login/profiles/${id}`;
     this.http.get(api).subscribe(datas=>{
       this.profile=datas
     })
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}