import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UpdatestatusService {
 stateUpdate:boolean=false;
 num=1000;
  constructor() { }
 

  updateState(){
   this.stateUpdate=true;  
   
  }
}
