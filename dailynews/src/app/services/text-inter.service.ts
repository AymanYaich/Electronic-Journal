import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Todo {
  id?;
  createdAt?: number;
  value : string;
}
@Injectable({
  providedIn: 'root'
})
export class TextInterService {
private _textIneraction = new BehaviorSubject<[]>([]);
observerText = this._textIneraction.asObservable();
  constructor() { }
  sendText(text){
     this._textIneraction.next(text)
  }
}
