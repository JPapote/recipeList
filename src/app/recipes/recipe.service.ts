import{ Injectable } from '@angular/core';
import { Recipe } from './recipe.module';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingService } from '../shopping-list/shopping.service';


@Injectable()
export class RecipeService{

private recipes: Recipe[] = [
    new Recipe ('this test', 
    'this is a simple test',
    '../../assets/img/images (1).jpg',
    [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
    ]),
    new Recipe ('this Other List', 
    'this is a simple test',
    '../../assets/img/images.jpg',
        [
        new Ingredient('Salad', 3),
        new Ingredient('fried', 11)
    ])
  ];
  constructor(private slService: ShoppingService){}

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(index: number){
      return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]){
      this.slService.addIngredients(ingredient)
  }


}