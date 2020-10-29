import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  
 url="http://api.openweathermap.org/data/2.5/weather";
 apiKey="8e11af439c58a46dc771336182b8d921";
  constructor( private http:HttpClient ) { }

getWeatherByCoord(lat,lon){
  let params = new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','imperial')
  .set('appid',this.apiKey)
  return this.http.get(this.url, { params })
}
}