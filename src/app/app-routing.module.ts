import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';

const routes: Routes = [
  {path:"settings",component:SettingsComponent},
  {path:"",component:WeatherComponent},
  {path:"details/:name",component:WeatherdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingLink=[SettingsComponent,WeatherComponent,WeatherdetailsComponent];
