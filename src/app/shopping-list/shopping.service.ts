import { EventEmitter } from "@angular/core";
import { ingredients } from "../Common/ingradient.model";

export class ShoppingService {

    changedIngredients = new EventEmitter<ingredients[]>();

    ingredient : ingredients[] = [
        new ingredients('apple' , 5),
        new ingredients('Tomoto' , 10)
    ];

    addIngredients(value : ingredients){
        this.ingredient.push(value);
        this.changedIngredients.emit(this.ingredient);
    }
    getIngredients(){
       return this.ingredient.slice();
    }

}