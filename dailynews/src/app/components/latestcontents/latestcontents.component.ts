import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {StateOneNewsService} from '../../services/state-one-news.service'
import { TypeOfService } from '../../services/type-of.service'
import { Router }   from '@angular/router'
@Component({
  selector: 'app-latestcontents',
  templateUrl: './latestcontents.component.html',
  styleUrls: ['./latestcontents.component.css']
})
export class LatestcontentsComponent implements OnInit {
  latestLocal:any=[];
  latestSport:any=[];
  latestArt:any=[];
  latestEconomy:any=[];
  latestInter:any=[];
  dataAll:any=[];
  constructor(public http:HttpClient , 
    public stateServ : StateOneNewsService,
    public typeOfServ : TypeOfService,
    public router :Router) { }

  ngOnInit(): void {
    this.stateServ.changeDetail2()
    this.getLatestLocal()
    this.getLatestSport()
    this.getLatestEconomy()
    this.getLatestArt()
    this.getLatestInter()
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
        getLatestInter(){
          this.http.get('http://localhost:3000/international/creates').subscribe((datas)=>{
            this.dataAll=datas;
            this.latestInter[0]=this.dataAll[this.dataAll.length-1];
            this.latestInter[1]=this.dataAll[this.dataAll.length-2];
            this.latestInter[2]=this.dataAll[this.dataAll.length-3];
            
           })
        }
     nationalType(){
       this.typeOfServ.newsCategory="national"
       this.router.navigate(["/detail-news"])
     }
     internationalType(){
      this.typeOfServ.newsCategory="international"
      this.router.navigate(["/detail-news"])

     }   
     economyType(){
      this.typeOfServ.newsCategory="economy"
      this.router.navigate(["/detail-news"])

     }   
     sportType(){
      this.typeOfServ.newsCategory="sport"
      this.router.navigate(["/detail-news"])

     }
     artType(){
      this.typeOfServ.newsCategory="art"
      this.router.navigate(["/detail-news"])

     }       
  }


