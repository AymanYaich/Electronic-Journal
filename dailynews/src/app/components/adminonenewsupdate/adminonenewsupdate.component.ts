import { Component, OnInit ,Input, AfterViewInit} from '@angular/core';
import { DataInteService } from '../../services/data-inte.service'
import { Router } from '@angular/router'
import { ImageSendService } from '../../services/image-send.service'
import { TextInterService } from '../../services/text-inter.service'
import { DateService } from '../../services/date.service'
import {StateOneNewsService} from '../../services/state-one-news.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-adminonenewsupdate',
  templateUrl: './adminonenewsupdate.component.html',
  styleUrls: ['./adminonenewsupdate.component.css']
})
export class AdminonenewsupdateComponent implements OnInit {
  detailState:boolean;
  updateStatus:boolean=false;
  message=""
  date:any;
  time:any;
  today:any;
  title:any=""
  weekDays:any={
    0:"Monday",
    1:"Tuesday",
    2:"Wednesday",
    3:"Thursday",
    4:"Friday",
    5:"Saturday",
    6:"Sunday"
  }
  @Input() oneNews:any=[]
 
  
  constructor(private http:HttpClient,
              private router:Router ,
              private _dataInter:DataInteService,
              private _imageInter: ImageSendService,
              private _textInter: TextInterService,
              private _dateInteraction : DateService,
              private stateServ : StateOneNewsService) { 
              
              }

  ngOnInit(): void {
    this.detailState=this.stateServ.detail
    this.addedAt();
    
    console.log(this.detailState)
  }
  
   addedAt(){
     let word =this.oneNews.created_at
    
      this.date = word.slice(0,10);
      this.time = word.slice(11,16)
      
  } 
    sendTo(){
      this._dataInter.sendTitle(this.oneNews.title)
    }
    sendImgTo(){
      this._imageInter.sendImage(this.oneNews.image)
    }
    sendTextTo(){
      this._textInter.sendText(this.oneNews.text)
    }
    sendDateTo(){
      this._dateInteraction.sendDate(`${this.date} ${this.time} ${this.oneNews.category}`)
                                      
    }
   update(){
    this.updateStatus=true;
   
 
   }
  
    }

 

//*//
