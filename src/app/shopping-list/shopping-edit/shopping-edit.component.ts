import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ingredients } from 'src/app/Common/ingradient.model';

import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  // @ViewChild('f', { static: true }) userdata!: NgForm;

  // // @ViewChild('name', { static: true }) name!: ElementRef;
  // // @ViewChild('amount', { static: true }) amount!: ElementRef;

  // // ingredentName!: string;
  // // ingredentAmount!: number;
  ingedient!: ingredients;

  constructor(private shoppingService : ShoppingService) { }

  // ngOnInit(): void {
  // }

  // // onAdd(){
  // //   this.ingredentName  = this.name.nativeElement.value;
  // //   this.ingredentAmount  = this.amount.nativeElement.value;
  // //   this.ingedient = new ingredients(this.ingredentName , this.ingredentAmount);
  // //   this.shoppingService.addIngredients(this.ingedient);
  // // }
  // onsubmit(value : NgForm){
  //   console.log(value);
  //   if (value.valid === true) {
  //     this.ingedient = new ingredients(value.value.userdata.name , value.value.userdata.amount);
  //     this.shoppingService.addIngredients(this.ingedient);
  //     this.userdata.reset();
  //   } else {
  //     alert("fill the form correctly")
  //   } 
  // }

  genders = ['Male' , 'Female'];
  forbiddenNames = ['udhaya@gmail.com'];
  signupForm !: FormGroup;
  isEdit = false;
  oldValue !: ingredients;
  indexvalue !: number;
 

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData" : new FormGroup({
        'email' : new FormControl(null , [Validators.required  , this.forbiddenName.bind(this)]), 
        'amount' : new FormControl(100 , [Validators.required]),
      }),
      'gender' : new FormControl('Male' )
    });
    this.shoppingService.OnEditIngredients.subscribe(
      (value : number) => {
        this.isEdit = true;
        this.indexvalue = value;
        this.oldValue = this.shoppingService.getByIndex(value);
        this.signupForm = new FormGroup({
          "userData" : new FormGroup({
            'email' : new FormControl(this.oldValue.name , [Validators.required  , this.forbiddenName.bind(this)]), 
            'amount' : new FormControl(this.oldValue.amount, [Validators.required]),
          }),
          'gender' : new FormControl('Male')
        });
      }
    ) 
  }

  onclick(){
    console.log(this.signupForm);
    this.ingedient = new ingredients(this.signupForm.get('userData.email')?.value , this.signupForm.get('userData.amount')?.value);
    if (this.isEdit) {
      this.shoppingService.editIngredients(this.indexvalue ,this.ingedient );
      this.isEdit = false;
    }else{
      this.shoppingService.addIngredients(this.ingedient);
    }
      this.signupForm.reset();
  }

  onClear(){
    this.signupForm.reset();
    this.isEdit = false;
  }

  onDelete(){
    if (this.isEdit) {
      this.shoppingService.deleteIngredients(this.indexvalue);
      this.onClear();
    }
  }
  

forbiddenName(form : FormControl) {
  if (!this.forbiddenNames.indexOf(form.value)) {
    return {'nameIsForbidden' : true};
  }
  return null;
}

}
