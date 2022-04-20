import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ingredients } from 'src/app/Common/ingradient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', { static: true }) name!: ElementRef;
  @ViewChild('amount', { static: true }) amount!: ElementRef;

  ingredentName!: string;
  ingredentAmount!: number;
  ingedient!: ingredients;

  @Output() addShopping = new EventEmitter<ingredients>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.ingredentName  = this.name.nativeElement.value;
    this.ingredentAmount  = this.amount.nativeElement.value;
    this.ingedient = new ingredients(this.ingredentName , this.ingredentAmount);
    this.addShopping.emit(this.ingedient);
  }

}
