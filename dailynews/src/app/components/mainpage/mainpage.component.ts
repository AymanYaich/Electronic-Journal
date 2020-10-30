import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  
constructor( public http: HttpClient ) { }
latestLocal:any=[];
latestSport:any=[];
latestArt:any=[];
latestEconomy:any=[];
  dataAll:any=[];
  ngOnInit(): void {
    this.getLatestLocal()
    this.getLatestSport()
    this.getLatestEconomy()
    this.getLatestArt()
      }
  
  getLatestLocal(){
    
  this.http.get('http://localhost:3000/national/creates').subscribe((datas)=>{
     this.dataAll=datas;
     this.latestLocal[0]=this.dataAll[this.dataAll.length-1];
     this.latestLocal[1]=this.dataAll[this.dataAll.length-2];
     this.latestLocal[2]=this.dataAll[this.dataAll.length-3];
     console.log("from server",this.latestLocal)
    
  })
}
  getLatestSport(){
    this.http.get('http://localhost:3000/sport/creates').subscribe((datas)=>{
      this.dataAll=datas;
      this.latestSport[0]=this.dataAll[this.dataAll.length-1];
      this.latestSport[1]=this.dataAll[this.dataAll.length-2];
      this.latestSport[2]=this.dataAll[this.dataAll.length-3];
     
     
   })
  }
  getLatestEconomy(){
    this.http.get('http://localhost:3000/economy/creates').subscribe((datas)=>{
      this.dataAll=datas;
      this.latestEconomy[0]=this.dataAll[this.dataAll.length-1];
      this.latestEconomy[1]=this.dataAll[this.dataAll.length-2];
      this.latestEconomy[2]=this.dataAll[this.dataAll.length-3];
      
     
   })
  }
  getLatestArt(){
    this.http.get('http://localhost:3000/art/creates').subscribe((datas)=>{
      this.dataAll=datas;
      this.latestArt[0]=this.dataAll[this.dataAll.length-1];
      this.latestArt[1]=this.dataAll[this.dataAll.length-2];
      this.latestArt[2]=this.dataAll[this.dataAll.length-3];
      
     })
  }

  
  }
