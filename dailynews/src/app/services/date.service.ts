import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Todo {
  id?;
  createdAt?: number ;
  value : string;
}


@Injectable({
  providedIn: 'root'
})
export class DateService {
private _dateInteraction = new BehaviorSubject<[]>([])
observerDate=this._dateInteraction.asObservable();
  constructor() { }
  sendDate(date){
    this._dateInteraction.next(date)
  }
}
