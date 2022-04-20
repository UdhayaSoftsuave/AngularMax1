import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecepieModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() selectedRecepie: any ;

  @Output() selectedValue = new EventEmitter<RecepieModel>();

  RecepieModels :RecepieModel[] = [
    new RecepieModel('A Test1' ,'good' , 'https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-1200.jpg'),
    new RecepieModel('A Test2' ,'very good ' , 'https://hebbarskitchen.com/wp-content/uploads/2022/02/masala-pasta-recipe-indian-style-pasta-recipe-indian-desi-pasta-recipes-2-683x1024.jpeg.webp')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onselect(value :RecepieModel ){
    this.selectedValue.emit(value);
  }

}
