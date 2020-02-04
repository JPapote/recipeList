import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.module';


export class ShoppingService{
    ingredientChange = new Subject<Ingredient[]>();
   private ingredient:Ingredient[] = [
    new Ingredient("Apple", 3),
    new Ingredient("Tomato", 11)
  ];

    getIngredient(){
       return  this.ingredient.slice();
    }

    addShopping(ingredient: Ingredient){
        this.ingredient.push(ingredient);
        this.ingredientChange.next(this.ingredient.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredient.push(...ingredients);
        this.ingredientChange.next(this.ingredient.slice())
    }
}