import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {Router} from '@angular/router'
declare var $: any;
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService,private router:Router) { }
  lat: any;
  log: any
  location: any;
  valueOfBlock: any = false;
  report: any;
  forecast: any;
  x: any;
  search: any;
  cityName: any;
  cityName1: any;
  texting: any;
  key: any;
  displaying=false;
  ngOnInit(): void {
    $(document).ready(() => {
      //alert('I am Called From jQuery');
    });
    for (let i = 0; i < localStorage.length; i++) {
      this.key = localStorage.key(i);
      this.texting = localStorage.getItem(this.key);
      //console.log(this.texting);
      this.x = document.getElementById('mySelect')!;
      var option = document.createElement("option");
      option.text = this.texting;
      //console.log(localStorage.key(0));
      this.x.appendChild(option);
      option.setAttribute('value', this.texting);
      localStorage.setItem(this.texting, this.texting);

    }

  }
  getChange(event: any) {
    this.cityName = event.target.value;
    //event.target.setAttribute("selected","selected");
    //console.log(this.cityName);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }

  }
  showPosition = (position: any) => {
    this.displaying=true;
    this.valueOfBlock = true;
    this.lat = position.coords.latitude;
    this.log = position.coords.longitude;
    this._weatherService.setMessage1(this.lat, this.log);
    this.getLocationData();
    //this.value = true;
  }
  getLocationData() {
    //this.value=true;
    this._weatherService.getReport().subscribe(data => {
      //console.log(data);
      this.location = data;
      //console.log(this.location);
      this._weatherService.setMessage2(this.location.name);
      this._weatherService.getReport2().subscribe(data => {
        this.report = data;
        // console.log(data);
        this.forecast = data.forecast.forecastday;
        console.log(this.forecast);
      });
    });
  }

  addName(value: any) {
    this.valueOfBlock = true;
    this.displaying=true;
    if (value !== '') {
      this.cityName1 = value;
      this._weatherService.setMessage2(this.cityName1);
      this._weatherService.getReport2().subscribe(data => {
        this.report = data;
        // console.log(data);
        this.forecast = data.forecast.forecastday;
        //console.log(this.forecast);
      });
    }
    else {
      this._weatherService.setMessage2(this.cityName);
      this._weatherService.getReport2().subscribe(data => {
        this.report = data;
        // console.log(data);
        this.forecast = data.forecast.forecastday;
        //console.log(this.forecast);
      });
    }
    this.x = document.getElementById('mySelect')!;
    var option = document.createElement("option");
    if (value !== '') {
      option.text = value;
      //console.log(localStorage.key(0));
      this.x.appendChild(option);
      option.setAttribute('value', value);
      localStorage.setItem(value, value);
    }
    this.search = document.getElementById('user')!;
    this.search.value = "";
  }

  onSelect(f:any)
  {
    this.router.navigate(['/details', f.date]);
    this._weatherService.transferData(this.report,f);
  }


}
