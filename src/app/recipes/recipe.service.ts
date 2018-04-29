import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzle', 'A super lazy-tasty Schnitzle - just awesome!' ,
        'https://pngimg.com/uploads/schnitzel/schnitzel_PNG9.png',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 'What else you need to say?',
        'http://static.businessinsider.com/image/53601a026bb3f7e3512eb8a7-750.jpg',
         [
             new Ingredient('Buns', 2),
             new Ingredient('Meat', 1)
         ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngrediantsToShoppingList(ingrediants: Ingredient[]) {
        this.slService.addIngredients(ingrediants);
      }
}
