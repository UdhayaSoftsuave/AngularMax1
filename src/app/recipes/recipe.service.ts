import { RecepieModel } from "./recipe.model";

export class RecepieService {
    RecepieModels :RecepieModel[] = [
        new RecepieModel('A Test1' ,'good' , 'https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-1200.jpg'),
        new RecepieModel('A Test2' ,'very good ' , 'https://hebbarskitchen.com/wp-content/uploads/2022/02/masala-pasta-recipe-indian-style-pasta-recipe-indian-desi-pasta-recipes-2-683x1024.jpeg.webp')
      ];
      
    getRecipies(){
        return this.RecepieModels;
    }
}