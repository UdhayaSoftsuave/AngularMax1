import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private recepieService : RecepieService ,
    private router : Router) { }

    

  ngOnInit(): void {
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
    let ingredientsArray = new FormArray([]);
    if (this.isEdit) {
      const recepie = this.recepieService.getRecipiesById(this.id);
      ProductName = recepie.name;
      imageUrl = recepie.imageUrl;
      description = recepie.description;
      if (recepie.ingredients) {
        for (const ing of recepie.ingredients) {
          ingredientsArray.push(new FormGroup({
            'name' : new FormControl(ing.name ,Validators.required),
            'amount' : new FormControl(ing.amount ,[Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.product = new FormGroup({
      'name' : new FormControl(ProductName , Validators.required),
      'imageUrl' : new FormControl(imageUrl ,Validators.required),
      'description' : new FormControl(description ,Validators.required),
      'ingredients' : ingredientsArray
    });
  }

  get getIngredientsControl(){
    const data = (<FormArray>this.product.get('ingredients')).controls; 
    return data;
  }
  onsubmit(){
    if (this.isEdit) {
      this.recepieService.editRecipies(this.id,this.product.value);
      console.log(this.product.value);
      this.router.navigate(['../'] , {relativeTo : this.routes});
    }else{
      this.recepieService.addRecipies(this.product.value);
      console.log(this.product.value);
      this.router.navigate(['recipes']);
    }
  }
  onAddIngredients(){
    (<FormArray>this.product.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null ,Validators.required),
        'amount' : new FormControl(null ,[Validators.required])
      })
      )
  }

  onCancel(){
    this.product.reset();
    this.router.navigate(['../'] , {relativeTo : this.routes});
  }

  onClickDeleteIngredients(i: number){
    (<FormArray>this.product.get('ingredients')).removeAt(i);
  }

}
