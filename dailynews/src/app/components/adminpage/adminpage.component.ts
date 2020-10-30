import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormBuilder , FormGroup} from '@angular/forms'

//import {  FileUploader } from 'ng2-file-upload/ng2-file-upload'
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  @ViewChild ('fileInput',{static:false}) fileInput:ElementRef
  imageUrl: string = '';
  title: string = '';
  textNews: string = '';
  nationalStatus:boolean=false;
  internationalStatus:boolean=false;
  economyStatus:boolean=false;
  sportStatus:boolean=false;
  artStatus:boolean=false;
  statusVal:String="";
  dataBase:any=[]
 // upload:any;
  constructor(public http: HttpClient ) {}
  
  ngOnInit(): void {
  
    
  }
 
  interNational() {
    let news = {
      image: this.imageUrl,
      title: this.title,
      text: this.textNews,
    };
    this.http.post('http://localhost:3000/international/creates', news).subscribe((data) => {
         console.log('button Submit works hello!!!',data );
    });
  };

    national(){
      let news = {
        image:this.imageUrl,
        title:this.title,
        text:this.textNews
      };
      this.http.post("http://localhost:3000/national/creates",news).subscribe(()=>{
        this.ngOnInit()
      })
    }
   
    EconomySubmit(){
      
      let fd = new FormData();
      fd.append('image',this.imageUrl);
      fd.append('title',this.title);
      fd.append('text',this.textNews);
      console.log(this.imageUrl)
      this.http.post("http://localhost:3000/sport/creates",fd).subscribe(()=>{
        this.ngOnInit()
      })
    }
  
      nationalEdit(){
         this.nationalStatus=true;
         this.internationalStatus=false;
         this.economyStatus=false;
         this.sportStatus=false;
         this.artStatus=false;
         this.dataBase.pop()
         this.dataBase.push("national")
         this.statusData()
      };
      internationalEdit(){
        this.nationalStatus=false;
        this.internationalStatus=true;
        this.economyStatus=false;
        this.sportStatus=false;
        this.artStatus=false;
        this.dataBase.pop()
        this.dataBase.push("international")
         this.statusData()
      };
      economyEdit(){
        this.nationalStatus=false;
        this.internationalStatus=false;
        this.economyStatus=true;
        this.sportStatus=false;
        this.artStatus=false;
        this.dataBase.pop()
        this.dataBase.push("economy")
         this.statusData()
      };
      sportEdit(){
        this.nationalStatus=false;
         this.internationalStatus=false;
         this.economyStatus=false;
         this.sportStatus=true;
         this.artStatus=false;
         this.dataBase.pop();
         this.dataBase.push("sport")
        this.statusData()

      };
      artEdit(){
        this.nationalStatus=false;
        this.internationalStatus=false;
        this.economyStatus=false;
        this.sportStatus=false;
        this.artStatus=true;
        this.dataBase.pop();
        this.dataBase.push("art")
        this.statusData()
      };

    statusData(){
      let arrayStatus=[];
      arrayStatus[0]={1:this.nationalStatus, 2:"national"};
      arrayStatus[1]={1:this.internationalStatus,2:"international"};
      arrayStatus[2]={1:this.economyStatus,2:"economy"};
      arrayStatus[3]={1:this.sportStatus,2:"sport"};
      arrayStatus[4]={1:this.artStatus,2:"art"};
      for ( let i = 0 ; i < arrayStatus.length ; i ++ ){
        if (arrayStatus[i][1]===true){
          this.statusVal=arrayStatus[i][2]
        }
      }
      //return this.statusVal;
      console.log("value is ",this.statusVal)
    }
}
