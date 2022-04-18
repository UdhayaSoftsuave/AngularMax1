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
  
  
  onclick() {
    this.online = true;
    this.show = true;
  }
}
