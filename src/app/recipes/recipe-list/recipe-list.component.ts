import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit 
{
  recipes: Array<Recipe> = [
    new Recipe('A Test Recipe', 'Sample only', 'https://c.pxhere.com/photos/fb/72/couple_engagement_kissing_love_people_romance-912979.jpg!d'),

    new Recipe('A Test Recipe', 'Sample only', 'https://c.pxhere.com/photos/fb/72/couple_engagement_kissing_love_people_romance-912979.jpg!d'),
  
  new Recipe('A Test Recipe', 'Sample only', 'https://c.pxhere.com/photos/fb/72/couple_engagement_kissing_love_people_romance-912979.jpg!d')
  ];

  constructor() { }

  ngOnInit() 
  {
  }

}
