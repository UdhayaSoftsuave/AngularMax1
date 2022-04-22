import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecepieModel } from '../recipe.model';
import { RecepieService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  @Output() selectedValue = new EventEmitter<RecepieModel>();

  RecepieModels :RecepieModel[] ;
  
  constructor(private recepieService : RecepieService) { 
    this.RecepieModels = recepieService.getRecipies();
  }

  ngOnInit(): void {
  }


}
