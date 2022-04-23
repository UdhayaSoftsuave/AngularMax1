import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ingredients } from 'src/app/Common/ingradient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecepieModel } from '../recipe.model';
import { RecepieService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id! : number;
  recepie!: RecepieModel;
  private ingredient! : ingredients[]
  constructor( private shoppingService : ShoppingService,
    private route : ActivatedRoute ,
    private recepieService : RecepieService,
    private routes : Router) { 
      console.log(this.route);
      
    }

  ngOnInit(): void {
      this.route.params.subscribe((param : Params) => {
        this.id = param['id'];
        this.recepie = this.recepieService.getRecipiesById(this.id);
      })
      
  }
   

  onClick(){
    this.ingredient =  this.recepie.ingredients;
    for (const value of this.ingredient) {
      this.shoppingService.addIngredients(value);
    }
  }

  onClickEdit(){
    this.routes.navigate(["edit"] , {relativeTo : this.route ,queryParamsHandling : 'preserve'});
  }

}
