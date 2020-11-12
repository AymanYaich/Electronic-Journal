import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'



 @Component({
  selector: 'app-data-test',
  templateUrl: './data-test.component.html',
  styleUrls: ['./data-test.component.css']
})
export class DataTestComponent implements OnInit {
   dataAll:any=[];
   data :any=[];     
  constructor( private http:HttpClient) { }
      
  ngOnInit(): void {
      
       this.getAll()
       console.log(this.data) 
}
     getAll(){
     this.http.get('http://localhost:3000/national/creates').subscribe((datas)=>{
      console.log('datas',datas)   
      this.data=datas
       for ( let i = 0 ; i < this.data.length ; i ++ ){
         this.dataAll[i]=this.data[i]
       }
     } )
     console.log('out',this.dataAll)
    }
  }    
   
   