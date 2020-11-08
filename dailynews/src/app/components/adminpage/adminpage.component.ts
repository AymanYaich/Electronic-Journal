import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {

  
  constructor( ) {}
    newsIn:boolean=false;
    regionsIn:boolean=false;
    advsIn:boolean=false;
    usersIn:boolean=false;
    initialIn:boolean=true;
  ngOnInit(): void {
 
  }
    news(){
      this.newsIn=true;
      this.regionsIn=false;
      this.advsIn=false;
      this.usersIn=false;
      this.initialIn=false;
    }
    regions(){
      this.newsIn=false;
      this.regionsIn=true;
      this.advsIn=false;
      this.usersIn=false;
      this.initialIn=false;
    }
    advs(){
      this.newsIn=false;
      this.regionsIn=false;
      this.advsIn=true;
      this.usersIn=false;
      this.initialIn=false;
    }
    users(){
      this.newsIn=false;
      this.regionsIn=false;
      this.advsIn=false;
      this.usersIn=true;
      this.initialIn=false;
    }
 }
