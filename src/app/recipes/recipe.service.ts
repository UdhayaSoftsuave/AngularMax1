import { Subject } from "rxjs";
import { ingredients } from "../Common/ingradient.model";
import { RecepieModel } from "./recipe.model";

export class RecepieService {
    
    isSelected = new Subject<boolean>();

    RecepieModels :RecepieModel[] = [
        new RecepieModel(
            'A Test1' 
            ,'good' , 
            'https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-1200.jpg',
            [new ingredients("bread" , 1),
            new ingredients("chease" , 2)]),
        new RecepieModel('A Test2' ,
        'very good ' , 
        'https://hebbarskitchen.com/wp-content/uploads/2022/02/masala-pasta-recipe-indian-style-pasta-recipe-indian-desi-pasta-recipes-2-683x1024.jpeg.webp',
        [new ingredients("totmoto" , 5),
        new ingredients("biscut" , 4)])
      ];

    getRecipies(){
        return this.RecepieModels;
    }
    getRecipiesById(id : number){
        return this.RecepieModels.slice()[id];
    }
}