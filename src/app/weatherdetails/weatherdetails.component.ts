import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {

  constructor(private _weatherService:WeatherService) { }
  report:any=this._weatherService.downloadingData();
  forecast:any=this._weatherService.downloadingData1();
  hourly:any=this.forecast.hour;
  
  ngOnInit(): void {
    console.log(this.hourly);
  }

}
