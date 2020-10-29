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
  dataAll:any=[];
  ngOnInit(): void {
    this.getLatestLocal()
  }
  
  getLatestLocal(){
    
  this.http.get('http://localhost:3000/international/creates').subscribe((datas)=>{
     this.dataAll=datas;
     this.latestLocal[0]=this.dataAll[this.dataAll.length-1];
     this.latestLocal[1]=this.dataAll[this.dataAll.length-2];
     this.latestLocal[2]=this.dataAll[this.dataAll.length-3];
     console.log("from server",this.latestLocal)
    
  })

  // for ( let i = this.dataAll.length-1 ; i>this.dataAll.length-4 ; i --){
  //   this.latestLocal.push(this.dataAll[i])
  } 
  // updateLocal(){
  //   this.getLatestLocal()
  //   console.log("keer",this.dataAll)
  //   // for ( let i = this.dataAll.length-1 ; i>this.dataAll.length-4 ; i --){
  //   //   this.latestLocal.push(this.dataAll[i])
     
  // } 
  }
