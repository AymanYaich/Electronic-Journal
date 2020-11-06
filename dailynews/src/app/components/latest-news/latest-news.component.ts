import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  @Input() categoryNews:any=[];
  latestNews:any=[];
  latest:any=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.newsUpdate()
  }
  newsUpdate(){
    this.http.get("http://localhost:3000/international/creates").subscribe((datas)=>{
      this.latest=datas;
      this.latestNews[0]=this.latest[this.latest.length-1];
      this.latestNews[1]=this.latest[this.latest.length-2];
      this.latestNews[2]=this.latest[this.latest.length-3];
    })
  }
}


