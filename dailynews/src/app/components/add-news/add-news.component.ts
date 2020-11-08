import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
   imageUrl:any;
   title:any;
   textNews:any;
   upload:any;
   categoryTitle:any
   url:String=`http://localhost:3000`
   allOptions:Boolean=true;
   addNews:Boolean=false
   @Input()  oneEdit:any=[];
  constructor(private http : HttpClient) { }
   
  ngOnInit(): void {
   
    this.categoryTitle=this.oneEdit.charAt(0).toUpperCase()+this.oneEdit.slice(1)
  }

  fileChangeEvent(event){
    
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
         this.upload=file
    }
}
  sendTo(){
    // let fd = new FormData();
    // fd.append('image',this.upload);
    // fd.append('title',this.title);
    // fd.append('text',this.textNews)
     let news={
       image:this.imageUrl,
       title:this.title,
       text:this.textNews
     }
    this.http.post(`${this.url}/${this.oneEdit}/creates`,news).subscribe(()=>{
      this.ngOnInit();
    })
    
  }
  add(){
    this.allOptions=false;
    this.addNews=true
  }
}
