import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Spaghetti',
      imageURL: '../assets/images/spaghetti_ionic.jpg',
      ingredients: ['1 pound ground beef',
        '1 onion, chopped',
        '4 cloves garlic- minced',
        '1 small green bell pepper, diced',
        '1 (28 ounce) can diced tomatoes',
        '1 (6 ounce) can tomato paste  '
        , '2 teaspoons dried oregano     '
        , '1 (16 ounce) can tomato sauce '
        , '2 teaspoons dried basil       '
        , '1 teaspoon salt               '
        , '½ teaspoon black pepper       ']
    },
    {
      id: 'r2',
      title: 'Lasagna',
      imageURL: 'https://picky-palate.com/wp-content/uploads/2019/10/IMG_3929.jpg',
      ingredients: ['1 pound lean ground beef            '
        , '1 onion, chopped                   '
        , '2 (6 ounce) cans tomato paste      '
        , '1 (14.5 ounce) can crushed tomatoes'
        , '2 cups water                       '
        , '1 tablespoon dried oregano         '
        , '2 teaspoons garlic powder          '
        , '2 teaspoons salt                   '
        , '¼ teaspoon ground black pepper     '
        , '1 tablespoon white sugar           '
        , '12 ounces cottage cheese           '
        , '½ cup grated Parmesan cheese       '
        , '1 egg                              '
        , '9 lasagna noodles                  '
        , '1 pound shredded mozzarella cheese ']
    }
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(
        recipe => { return recipeId === recipe.id; })
    }
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
