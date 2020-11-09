import { Component, OnInit } from '@angular/core';
import {  interval , Subscription,Observable } from 'rxjs'
import { WeatherService } from '../../services/weather.service';
import { AuthService } from '../../../../auth2/shared/auth.service'
import { TypeOfService } from '../../services/type-of.service' 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  weekDays:any= { 0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
  monthsList = { 0:"Junuary",1:"February", 2:"Mars",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November", 11:"December"}
  today:String="";
  date:String=";"
  fullTime:String="";
  lat:any;
  lon:any;
  dataWeather:any;
  currentUser:any;
  ifLogged:boolean=false
  category:String=""
  user:any={};
  city="Tunis"
  constructor( private weatherservice:WeatherService  ,private authServ :AuthService ,private typeOfServ : TypeOfService){ }

  private updateSubscription: Subscription;
  ngOnInit(): void {
    this.timeNow()
    this.updateSubscription = interval(1000).subscribe(
      (val) => {this.timeNow()
    });
    this.ifLogged = this.authServ.signedIn
    
    this.currentUser=this.authServ.currentUser;
    this.user=this.currentUser.msg;
    console.log(this.user.city)
    if(this.ifLogged===true){
     this.city=this.user.city
    }
   else{
    this.city="Tunis"
   }
    
  }
  timeNow(){
    
   
    let currentDate = new Date();
    let day = currentDate.getDay();
    let date = currentDate.getDate()
    this.today = this.weekDays[day];
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec =  currentDate.getSeconds()
 
    let month = currentDate.getMonth();
    let currentMonth = this.monthsList[month] 
    let year =  currentDate.getFullYear()
   this.date = `${date}  ${currentMonth}  ${year}`
   this.fullTime = `${hour}:${min}:${sec} `
   
  }
  logout(){
    this.authServ.doLogout()
   }

nationalType(){
  this.typeOfServ.newsCategory='national'
}
InternationalType(){
  this.typeOfServ.newsCategory='international'
}
economyType(){
  this.typeOfServ.newsCategory='economy'
}
sportType(){
  this.typeOfServ.newsCategory='sport'
}
artType(){
  this.typeOfServ.newsCategory='art'
}
}
// getUserLocation(){
//   if ('geolocation' in navigator){
//     navigator.geolocation.watchPosition((success)=>{
//       this.lat = success.coords.latitude;
//       this.lon = success.coords.longitude;

//       this.weatherservice.getWeatherByCoord(this.lat,this.lon).subscribe((data)=>{
//         this.dataWeather=data
//       })
//     })
//   }
// }
 

