import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface UserDetails {
  _id: string;
  email: string;
  firstName: string;
  lastName : string;
  exp: number;
  iat: number;
}
interface TokenResponse {
  token:string;
}

export interface TokenPayload {
  email:string;
  password:string;
  firstName?:string;
  lastName?:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;
  constructor(private http: HttpClient, private router: Router) { }
}
