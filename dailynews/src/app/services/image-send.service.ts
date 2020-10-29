import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
export interface Todo {
  id?;
  createdAt?: number;
  value : string;
}
@Injectable({
  providedIn: 'root'
})
export class ImageSendService {
private _imgInteraction = new BehaviorSubject<[]>([]);
observerImg=this._imgInteraction.asObservable();
  constructor() { }
  sendImage(img){
    this._imgInteraction.next(img)
  }
}
