import { Component, OnInit } from '@angular/core';
import { TypeOfService} from '../../services/type-of.service'
import {StateOneNewsService} from '../../services/state-one-news.service'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-detailnews',
  templateUrl: './detailnews.component.html',
  styleUrls: ['./detailnews.component.css']
})
export class DetailnewsComponent implements OnInit {
  category:string="";
  listNews:any=[];
  list:any=[];
  constructor(private typeOfServ : TypeOfService, 
    private stateServ:StateOneNewsService,
    private http :HttpClient) { }

  ngOnInit(): void {
   this.category=this.typeOfServ.newsCategory;
   this.getAll()
    this.stateServ.changeDetail()
  }
   getAll(){
     this.http.get(`http://localhost:3000/${this.category}/creates`).subscribe((datas)=>{
       this.list=datas;
       this.listNews=this.list.reverse();
       this.ngOnInit()
     })
   }
}
