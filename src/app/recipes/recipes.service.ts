import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id:'r1',
      title:'Schitzel',
      imageUrl:'https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg',
      ingredients:['Chiken','Kassci','Salad']
    },
    
    {
     id:'r2',
     title:'Recipe Title 2',
     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXhfqpp6lkCWeG__jdqgyrpn8trp6KAHmGUxLS6Io9RNi3oGOk9C3DIwyNdmnUBjQctQ&usqp=CAU',
     ingredients:['Tandori','Cap','Salad']
   },
   {
     id:'r3',
     title:'Recipe Title 3',
     imageUrl:'https://images.food52.com/5YMHs0LZcvPCHhQUqjTdlOpVpm0=/1200x900/72c753a4-e7a2-4bac-a5cb-9e6d9024b675--2020-0331_slow-roasted-chicken-extra-crisp-skin_genius-final_3x2_julia-gartland_195.jpg',
     ingredients:['Kassci','Salad','Misti']
   }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];//get all recipes array data using this
  }
  //return single recipe object
  getRecipe(recipeID:string){
    return {
        ...this.recipes.find(recipe=>{ //get recipe by recipes array (... sperated operetor /confuse)
        return recipe.id === recipeID;
      })
    };
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
      }
    )
  }
}
