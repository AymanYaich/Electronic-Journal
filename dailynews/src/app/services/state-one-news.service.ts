import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateOneNewsService {
   detail:boolean=false;
  constructor() { }
changeDetail(){
  this.detail=true
}

}
 
