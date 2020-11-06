import { Component, OnInit } from '@angular/core';
import { DataInteService } from '../../services/data-inte.service'
import { Router,NavigationEnd } from '@angular/router'
import { ImageSendService } from '../../services/image-send.service';
import { TextInterService } from '../../services/text-inter.service'
import { DateService } from '../../services/date.service'
@Component({
  selector: 'app-readmore-content',
  templateUrl: './readmore-content.component.html',
  styleUrls: ['./readmore-content.component.css']
})
export class ReadmoreContentComponent implements OnInit {

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
wordDate:any;


ngOnInit(){

this.getTitle();
this.getImage();
this.getText();
this.getDate();
this.word()   
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
this._dateInteraction.observerDate.subscribe((datas)=>{
this.wordDate=datas
})
}

word(){
let array=this.wordDate.split(" ")
this.date=array[0]
this.time=array[1]
this.category=array[2]
}

}



