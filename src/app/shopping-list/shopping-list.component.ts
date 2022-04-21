import { Component, OnInit } from '@angular/core';
import { ingredients } from '../Common/ingradient.model';
import { ShoppingService } from './shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient : ingredients[] ;

  constructor(private shoppingService :ShoppingService) { 
    this.ingredient = this.shoppingService.getIngredients();
    this.shoppingService.changedIngredients.subscribe(
      (value: ingredients[]) => {
        this.ingredient = value;
      }
    )
  }

  ngOnInit(): void {
  }

}
