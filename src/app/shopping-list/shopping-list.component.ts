import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[]

private igChangeSub: Subscription;

  constructor(private serviceShopping: ShoppingService) { 
   
  }

  ngOnInit() {
    this.ingredients = this.serviceShopping.getIngredient();
    this.igChangeSub = this.serviceShopping.ingredientChange
    .subscribe((ingredient: Ingredient[])=> {
      this.ingredients = ingredient;
    })
  }
  
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
}
