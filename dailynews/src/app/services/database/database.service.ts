import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  api=`http://localhost:3000`
  constructor( public http:HttpClient) {
    
   }
 
  getFromDatabase(category:string) :Observable<any> {

      return this.http.get(`${this.api}/${category}/creates`)
  }
  }
