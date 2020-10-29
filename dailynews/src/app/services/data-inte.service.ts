import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'
export interface Todo {
  id?: any;
  createdAt?: number;
  value: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class DataInteService {
  private _dataInteraction = new BehaviorSubject<Todo[]>([]);
  observeNews=this._dataInteraction.asObservable();
 
  constructor() { }

  sendTitle(title){
    this._dataInteraction.next(title)
  }
 
}
