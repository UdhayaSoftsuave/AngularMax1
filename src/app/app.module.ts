import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/component.header';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recepie-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicDerective } from './Common/BaiscDerective';
import { BetterBasicDirectiveDirective } from './Common/better-basic-directive.directive';
import { CustomStructuralDirectiveDirective } from './Common/custom-structural-directive.directive';
import { DropDown } from './Common/component.dropdown';
import { RecepieService } from './recipes/recipe.service';
import { ShoppingService } from './shopping-list/shopping.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicDerective,
    BetterBasicDirectiveDirective,
    CustomStructuralDirectiveDirective,
    DropDown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecepieService ,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
