import { Component, OnInit } from '@angular/core';
import { ingredients } from '../Common/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient : ingredients[] = [
    new ingredients('apple' , 5),
    new ingredients('Tomoto' , 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
