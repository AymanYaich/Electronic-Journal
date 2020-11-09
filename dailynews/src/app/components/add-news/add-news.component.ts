import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
   imageUrl="";
   title="";
   textNews="";
   upload:any;
   categoryTitle:any
   url:String=`http://localhost:3000`
   allOptions:Boolean=true;
   addNews:Boolean=false;
   formShow:Boolean=true;
   imageAlert:string="";
   titleAlert:string="";
   textAlert:string="";
   alert:string="";
   ableToSend:boolean=true;
   modelShow:boolean=false;
   arrayMissedContent=[]
   dataSample:any=[];
   dataNews:any=[];
   dataOrdered:any=[]
   dataSize:number;
   detailNews:boolean=false
   successSend=false
   editdeleteNews=false;
   
   @Input()  oneEdit:any=[];
  constructor(private http : HttpClient) { }
   
  ngOnInit(): void {
   
    this.categoryTitle=this.oneEdit.charAt(0).toUpperCase()+this.oneEdit.slice(1)
    this.getAll();
    this.dataSize=this.dataNews.length
    this.dataOrdered=this.dataNews.reverse()
    console.log(this.dataNews)

  }

  fileChangeEvent(event){
    
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
         this.upload=file
    }
}
 getAll(){
   this.http.get(`${this.url}/${this.oneEdit}/creates`).subscribe((datas)=>{
     this.dataNews=datas;
     this.ngOnInit()
   })
   
  }
  sendPre(){

     let news={
       image:this.imageUrl,
       title:this.title,
       text:this.textNews
     }
    
    this.http.post(`${this.url}/${this.oneEdit}/creates`,news).subscribe(()=>{
     this.ngOnInit()
    })
 }

  sendTo(){
   const size=this.dataSize;
  this.sendPre();
  this.getAll();
 console.log("last",this.dataNews[this.dataNews.length-1])
  let newSize=this.dataNews.length
  console.log("size2",newSize)
  console.log("size1",size)
  this.successSend=true
  this.detailNews=false;
  }
 sendFirst(){
    
     if (this.imageUrl===""){
       this.imageAlert="*Impossible to send to database , you forget to upload your image";
      
       this.arrayMissedContent.push("the image,")
     }
     if(this.title===""){
       this.titleAlert="*Impossible to send to database , you forget to add a title for the article"
     
       this.arrayMissedContent.push("the title")
     }
     if(this.textNews===""){
       this.textAlert="*Impossible to send to database , you forget to write the content of the news"
      
       this.arrayMissedContent.push("the content,")
     }if ((this.imageUrl==="")||(this.title==="") ||(this.textNews==="")){
       this.ableToSend=false
     }else{
       this.ableToSend=true
     }
     if(this.ableToSend===false){
       let word="";
       for ( let i = 0 ; i < this.arrayMissedContent.length ; i++){
          word+=this.arrayMissedContent[i];
          
       }
       word=word.slice(0,-1)
       this.alert=`*Impossible to send to database, you missed to add ${word}`
     }else{
       this.textAlert='';
       this.imageAlert='';
       this.titleAlert='';
       this.alert='';
       let newsModel ={
         image:this.imageUrl,
         title:this.title,
         text:this.textNews,
         created_at:"2020-11-04T12:18:21.636+00:00"
       };
       this.dataSample.push(newsModel)
       console.log(this.dataSample)
       this.formShow=false;
       this.modelShow=true
     }
     
   
 }
  add(){
    this.allOptions=false;
    this.addNews=true
  }
  readmore(){
    this.modelShow=false;
    this.detailNews=true;
  }
  edit(){
    this.modelShow=false;
    this.detailNews=false;
    this.formShow=false;
    
  }
  anOtherNews(){
    this.successSend=false;
    this.allOptions=true;
    this.addNews=false;

  }
  deleteedit(){
   this.editdeleteNews=true;
   this.allOptions=false
}
}
