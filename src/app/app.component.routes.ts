import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecepieStartComponent } from "./recipes/recepie-start/recepie-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const routes = [
    {path : "recipes" ,component : RecipesComponent , children :[
        {path : "" ,component : RecepieStartComponent },
        {path : ':id' ,component : RecipeDetailComponent }
    ] },
    {path : "shopping-list" ,component : ShoppingListComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutes {

}