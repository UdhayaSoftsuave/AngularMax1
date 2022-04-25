import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ingredients } from 'src/app/Common/ingradient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  genders = ['Male' , 'Female'];

  // @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild('amount', { static: true }) amount!: ElementRef;

  // ingredentName!: string;
  // ingredentAmount!: number;
  ingedient!: ingredients;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit(): void {
  }

  // onAdd(){
  //   this.ingredentName  = this.name.nativeElement.value;
  //   this.ingredentAmount  = this.amount.nativeElement.value;
  //   this.ingedient = new ingredients(this.ingredentName , this.ingredentAmount);
  //   this.shoppingService.addIngredients(this.ingedient);
  // }
  onsubmit(value : NgForm){
    console.log(value);
    if (value.valid) {
      this.ingedient = new ingredients(value.value.name , value.value.amount);
      this.shoppingService.addIngredients(this.ingedient);
    } else {
      alert("fill the form correctly ")
    } 
  }

}
