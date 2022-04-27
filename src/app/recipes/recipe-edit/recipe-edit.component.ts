import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecepieService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id! : number;
  isEdit = false;
  product !: FormGroup;
  constructor(private routes : ActivatedRoute , 
    private recepieService : RecepieService) { }

    

  ngOnInit(): void {
    this.initForm();
    this.routes.params.subscribe(
      (param : Params) => {
        this.id = +param['id'];
        this.isEdit = param['id'] == null ? false : true;
        this.initForm();
      }
    )
  }

  initForm(){
    let ProductName = '';
    let imageUrl = '';
    let description = '';
    let ingredients = new FormArray([]);
    if (this.isEdit) {
      const recepie = this.recepieService.getRecipiesById(this.id);
      ProductName = recepie.name;
      imageUrl = recepie.imageUrl;
      description = recepie.description;
      if (recepie.ingredients) {
        for (const ing of recepie.ingredients) {
          ingredients.push(new FormGroup({
            'ingName' : new FormControl(ing.name ,Validators.required),
            'ingAmount' : new FormControl(ing.amount ,[Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.product = new FormGroup({
      'name' : new FormControl(ProductName , Validators.required),
      'imageUrl' : new FormControl(imageUrl ,Validators.required),
      'description' : new FormControl(description ,Validators.required),
      'ingredients' : ingredients
    });
  }

  getIngredientsControl(){
    const data = (this.product.controls["ingredients"] as FormArray).value;
    return data;
  }
  onsubmit(){
    console.log(this.product);
  }
  onAddIngredients(){
    (<FormArray>this.product.get('ingredients')).push(
      new FormGroup({
        'ingName' : new FormControl(null ,Validators.required),
        'ingAmount' : new FormControl(null ,[Validators.required ])
      })
      )
  }

}
