import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Recipe } from '../recipe.module';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadRecipe: Recipe;
  constructor(
    private activatedRoute:ActivatedRoute,
    private recipesServices:RecipesService,
    private router : Router,
    //it's working after delete navigate the page
    private alertController: AlertController,
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( //subscribe get all single data to this paramMap
      paramMap => {  //get all data this paramMap object
        if(!paramMap.has('recipeId')){
          return;
        }
        const recipeId = paramMap.get('recipeId');
        this.loadRecipe = this.recipesServices.getRecipe(recipeId);
      }
    )
  }

  onDeleteRecipe(){
    this.alertController.create({
      header:'Are you sure?',
      message:'Do you want to delete this recipe?',
      buttons:[
        {
          text:'Cencel',
          role:'cencel'
        },
        {
          text:'Delete',
          handler:()=> {
            this.recipesServices.deleteRecipe(this.loadRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
