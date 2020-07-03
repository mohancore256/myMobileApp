import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recip-detail',
  templateUrl: './recip-detail.page.html',
  styleUrls: ['./recip-detail.page.scss'],
})
export class RecipDetailPage implements OnInit {
  reguestedrecipe: Recipe;

  constructor(
    private router: Router, 
    private recipeService: RecipesService, 
    private activatedRout: ActivatedRoute,
    private alert :AlertController) { }

  ngOnInit() {
    this.activatedRout.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('recipeId')) {
          this.router.navigate(['/recipes']);
          return;
        }
        const recipeId = paramMap.get('recipeId');
        this.reguestedrecipe = this.recipeService.getRecipe(recipeId);

      }
    )
  }

  deleteLoadedRecipe() {
    this.alert.create({
      header:'Are you sure?', 
      message:'Do you want to delete the recipe',
      buttons :[
        {
          text:'Cancel',
          role:'cancel'
        },{
          text:'Delete',
          handler:()=>{
            this.recipeService.deleteRecipe(this.reguestedrecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl =>{
      alertEl.present()
    });
    
  }

}
