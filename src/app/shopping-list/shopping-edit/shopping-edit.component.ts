import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  // ingedient!: ingredients;

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
  signupForm !: FormGroup;
 

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData" : new FormGroup({
        'email' : new FormControl(null , [Validators.required , Validators.email]), 
        'amount' : new FormControl(100 , [Validators.required]),
      }),
      'gender' : new FormControl('Male' , Validators.required)
    });
  }

  onclick(){
    console.log(this.signupForm);
  }
  


}
