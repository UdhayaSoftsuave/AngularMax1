import { Component, Input, OnInit } from '@angular/core';
import { ingredients } from 'src/app/Common/ingradient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecepieModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  private ingredient! : ingredients[]
  constructor( private shoppingService : ShoppingService ) { }

  ngOnInit(): void {
  }
  @Input() recepie!: RecepieModel;

  onClick(){
    this.ingredient =  this.recepie.ingredients;
    for (const value of this.ingredient) {
      this.shoppingService.addIngredients(value);
    }
  }

}
