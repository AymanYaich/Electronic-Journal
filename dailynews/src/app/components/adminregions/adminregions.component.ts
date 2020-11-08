import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-adminregions',
  templateUrl: './adminregions.component.html',
  styleUrls: ['./adminregions.component.css']
})
export class AdminregionsComponent implements OnInit {
  ifRegion:boolean=false;
  region:String="";
  photoRegion:String="";
  regionList:any=[];
  advertiseIn:boolean=false
  default:boolean=false;
  newAdvertise:boolean=false;
  constructor( public http:HttpClient) { }

  ngOnInit(): void {
    this.getRegions()
  }
  regionTo(){
    this.ifRegion=true;
  }
  addRegion(){
    let newRegion={
       name:this.region,
       photo:this.photoRegion,
       advertise:""
    }
    console.log(newRegion)
    this.http.post("http://localhost:3000/regions/creates",newRegion).subscribe(()=>{
      this.ngOnInit
    })
    window.location.reload();
  }
  getRegions(){
    this.http.get("http://localhost:3000/regions/creates").subscribe((datas)=>{
      this.regionList=datas
      this.ngOnInit()
    })
  }
  advertiseTo(){
     this.advertiseIn=true
  }
  defaultAdvertiseTo(){
    this.default=true
  }
  addNew(){
    this.newAdvertise=true
  }
  
}
