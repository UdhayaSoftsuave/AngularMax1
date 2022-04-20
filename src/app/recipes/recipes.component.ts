import { Component, OnInit } from '@angular/core';
import { RecepieModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe!: RecepieModel;
  constructor() { }

  ngOnInit(): void {
  }
  onselect(value : RecepieModel){
    this.recipe = value;
  }
  value = 678;

}
