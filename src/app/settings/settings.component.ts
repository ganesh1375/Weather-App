import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  texting: any;
  key: any;
  x:any;
  y:any;
  search:any;
  removedKey:any;
  ngOnInit(): void {
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
  delete()
  {
    this.y = document.getElementById("mySelect")!;
    //console.log(this.y.selectedIndex);
    this.removedKey=localStorage.key(this.y.selectedIndex);
    localStorage.removeItem(this.removedKey);
    this.y.remove(this.y.selectedIndex);
  }
  addNewCity(value:any)
  {
    this.y = document.getElementById("mySelect")!;
    var option = document.createElement("option");

      option.text = value;
      //console.log(localStorage.key(0));
      this.y.appendChild(option);
      option.setAttribute('value', value);
      localStorage.setItem(value,value);
      this.search=document.getElementById('user')!;
      this.search.value="";
  }
}
