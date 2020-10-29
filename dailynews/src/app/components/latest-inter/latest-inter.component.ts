import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-latest-inter',
  templateUrl: './latest-inter.component.html',
  styleUrls: ['./latest-inter.component.css']
})
export class LatestInterComponent implements OnInit {
  latestInter:any=[];
  latest:any=[]
  constructor( public http:HttpClient) { }

  ngOnInit(): void {
    this.interUpdate()
  }
  interUpdate(){
    this.http.get("http://localhost:3000/national/creates").subscribe((datas)=>{
      this.latest=datas;
      this.latestInter[0]=this.latest[this.latest.length-1];
      this.latestInter[1]=this.latest[this.latest.length-2];
      this.latestInter[2]=this.latest[this.latest.length-3];
    })
  }
}
