import { Component, OnInit } from '@angular/core';
import { AdminInteractionService } from '../../services/admin-interaction.service'


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {

  
  constructor( public interactionServ:AdminInteractionService) {}
    newsIn:boolean=false;
    regionsIn:boolean=false;
    advsIn:boolean=false;
    usersIn:boolean=false;
    initialIn:boolean=true;
  ngOnInit(): void {
   
    console.log(this.interactionServ.returnAdmin)
    console.log('you are still in parent component')
    console.log("a",this.newsIn)
    console.log("b",this.initialIn)
    
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
    return(){
      this.initialIn=true;
      this.newsIn=false;
    }
  
 }
