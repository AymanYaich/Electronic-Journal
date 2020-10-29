import { Component,OnInit, OnDestroy} from '@angular/core';
import { DataInteService } from '../../services/data-inte.service'
import { Router,NavigationEnd } from '@angular/router'
import { ImageSendService } from '../../services/image-send.service';
import { TextInterService } from '../../services/text-inter.service'
import { DateService } from '../../services/date.service'

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
}) 

export class ReadmoreComponent  implements OnInit {




  constructor(private _dataInter : DataInteService, 
              private _imageInter: ImageSendService,
              private _textInter : TextInterService,
              private _dateInteraction: DateService,
              private router:Router) { }
                                                                            
  
 tt:any="";
 url:any="";
 text:any="ll";
 date:any;
 time:any;
 category:any;
 object:any;
 

  ngOnInit(){
    this.getTitle();
    this.getImage();
    this.getText();
    this.getDate()   
    }
 
   getTitle(){
     
     this._dataInter.observeNews.subscribe(title=>{
        
            this.tt=title
          });
          
      }
   getImage(){
     this._imageInter.observerImg.subscribe((img)=>{
         this.url=img;
     })
   };
   
   getText(){
     this._textInter.observerText.subscribe((txt)=>{
          this.text=txt;
     })
   };

   getDate(){
     this._dateInteraction.observerDate.subscribe((obj)=>{
       this.object=obj
     })
   }
     

     
}


