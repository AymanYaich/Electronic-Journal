import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }  from '@angular/router';
@Component({
  selector: 'app-signup-content',
  templateUrl: './signup-content.component.html',
  styleUrls: ['./signup-content.component.css']
})
export class SignupContentComponent implements OnInit {

  firstName:string="";
   lastName:string="";
   city:string="";
   email:string="";
   password:string="";
   citiesModel:any=[];
   cities:any=[];
   array=["a","b","c"]
  constructor( private http : HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.getRegions()
  
    this.cities=this.citiesModel.map((city)=>{
      return city.name
    })
    console.log("kk",this.cities)
  }
    register(){
     
      let newUser={
        firstName:this.firstName,
        lastName:this.lastName,
        city:this.city,
        email:this.email,
        password:this.password
      }; 
     
      this.http.post("http://localhost:3000/register/creates",newUser).subscribe(()=>{
        this.ngOnInit()
      })
      this.router.navigate(['log-in'])
     }
     getRegions(){
      this.http.get("http://localhost:3000/regions/creates").subscribe((datas)=>{
        this.citiesModel=datas
       
        this.ngOnInit();
      })
      
     }

  
}
