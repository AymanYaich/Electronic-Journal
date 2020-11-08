
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-adminnews',
  templateUrl: './adminnews.component.html',
  styleUrls: ['./adminnews.component.css']
})
export class AdminnewsComponent implements OnInit {
  imageUrl: string = '';
  title: string = '';
  textNews: string = '';
  nationalStatus:boolean=false;
  internationalStatus:boolean=false;
  economyStatus:boolean=false;
  sportStatus:boolean=false;
  artStatus:boolean=false;
  statusVal:String="";
  dataBase:any=[];

  constructor(public http: HttpClient ) { }

  ngOnInit(): void {
   // this.getRegions()
   
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
}
 


}
