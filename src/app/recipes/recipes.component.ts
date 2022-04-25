import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';
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
        if (count > 2 ) {
          observer.complete();
        }
        if (count > 4 ) {
          observer.error("count expires");
        }
        count++;
      },500);
  });
  this.subcription = observe.pipe(filter((data : any) => {
    return data > 2;
}),map((value : number) => {
    return "Round : "+ value;
  })).subscribe((value: any) => {
    console.log(value);
  },(value: any)=> {
      console.log(value);
      alert("count expires");
  } ,() => {
    console.log("completed!");
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
