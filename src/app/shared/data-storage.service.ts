import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient, private recipeService:RecipeService) { }

  storeRecipes(){
    const recipes=this.recipeService.getRecipes();
    //all data would be overwritten
    this.http.put('https://ng-recipe-book-35a0f-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe((res)=>{
      console.log(res)
    })
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('https://ng-recipe-book-35a0f-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes=>{
      return recipes.map(recipe=>{
        return{
          ...recipe,
          ingredients:recipe.ingredients?recipe.ingredients:[]
        };
      });
    }),
    tap(recipes=>{
      this.recipeService.setRecipes(recipes);
    })
    )
    // .subscribe((res)=>{
    //   this.recipeService.setRecipes(res)
    // })
  }
}
