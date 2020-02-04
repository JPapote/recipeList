import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {Header} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ItemComponent } from './recipes/recipe-list/item/item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Dropdown } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import {AppRouterList} from './app-router-list.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    Dropdown,
    RecipeStartComponent,
    RecipeEditComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterList
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
