import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RecepieModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit , OnDestroy {
  private subcription! : Subscription;
  recipe!: RecepieModel;
  constructor() { }

  ngOnInit(): void {
    const observe  = Observable.create((observer: any) => {
      let count = 0 ;
      setInterval(() => {
        observer.next(count)
        count++;
      },500);
  });
  this.subcription = observe.subscribe((value: any) => {
    // console.log(value);
  })
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  onselect(value : RecepieModel){
    this.recipe = value;
  }
  value = 678;

}
