import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepieModel } from '../recipe.model';
import { RecepieService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  isSelected = false;

  @Output() selectedValue = new EventEmitter<RecepieModel>();

  RecepieModels! :RecepieModel[] ;
  
  constructor(private recepieService : RecepieService,
    private Activeroutes : ActivatedRoute,
    private routes : Router) { 
    
  }

  ngOnInit(): void {
    this.recepieService.isSelected.subscribe(value => {
      this.isSelected =value;
    })
    this.RecepieModels = this.recepieService.getRecipies();
    this.recepieService.recepieChanges.subscribe(value => {
      this.RecepieModels =value;
    })

  }
  onclickEvent(){
    console.log(this.Activeroutes);
    this.recepieService.isSelected.next(true);
    
    this.routes.navigate(["new"] ,{relativeTo : this.Activeroutes , queryParamsHandling : 'preserve'});
  }

}
