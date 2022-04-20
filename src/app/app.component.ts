import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  names = ["udhaya" , "kumar" , "prasana"];
  online = false;
  show = false;
  SelectedTab = "Recipes";
  
  
  onclick() {
    this.online = true;
    this.show = true;
  }

  onselectColumn(value : string) {
    this.SelectedTab = value;
  }
}
