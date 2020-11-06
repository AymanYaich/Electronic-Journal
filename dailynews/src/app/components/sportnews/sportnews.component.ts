import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {StateOneNewsService} from '../../services/state-one-news.service'
@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {
  sportList:any=[]
  constructor(private http:HttpClient , private stateServ:StateOneNewsService) { }

  ngOnInit(): void {
    this.getAll()
    console.log(this.sportList)
    this.stateServ.changeDetail()
  }
   getAll(){
     this.http.get('http://localhost:3000/sport/creates').subscribe((datas)=>{
       this.sportList=datas;
       this.ngOnInit()
     })
   }
}
