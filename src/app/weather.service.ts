import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  lat:any;
  log:any;
  name:any;
  setMessage1(lat:any,log:any)
  {
    this.lat=lat;
    this.log=log;
  }
  setMessage2(data:any)
  {
    this.name=data;
  }

  details:any;
  data:any
  transferData(details:any,data:any)
  {
    this.details=details;
    this.data=data;
  }
  downloadingData()
  {
    return this.details;
  }
  downloadingData1()
  {
    return this.data;
  }
  

  getReport(): Observable<any> {
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.log}&appid=2d6947d8f6988efe62da93bc86547891`);
  }
  getReport2(): Observable<any> {
    return this.http.get<any>(`http://api.weatherapi.com/v1/forecast.json?key=cc84ef30946243dc87c42917211704&q=${this.name}&days=5&aqi=no&alerts=no`);
  }

}
