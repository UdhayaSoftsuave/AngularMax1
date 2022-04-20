import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecepieModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() list!: RecepieModel;

  @Output() seletedRecepie = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onselected(){
    this.seletedRecepie.emit();
  }

}
