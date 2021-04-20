import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule, routingLink } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { WeatherComponent } from './weather/weather.component';
import {WeatherService} from './weather.service';
import {HttpClientModule} from '@angular/common/http';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    WeatherComponent,
    routingLink,
    WeatherdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
