import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public meals = {};
  public letters = [];
  @ViewChild('mealSearch') input;
  constructor(private mealService: MealService, private _router: Router) {}

  ngOnInit() {
    this.letters = this.mealService.letters;
  }

  randomMeal() {
    this.mealService.option = 'random';
    this.mealService.getMeals(this.mealService.randomMealURL);
    this.mealService.meals$.subscribe((response) => {
      this.meals = response;
    });
  }

  searchMeal() {
    this.mealService.option = 'search';
    this.mealService.getMeals(
      this.mealService.searchMealNameURL + this.input.value
    );
    this.mealService.meals$.subscribe((response) => {
      this.meals = response;
    });
    this.mealService.currentQuery = 'Containing: ' + this.input.value;
  }

  searchLetter(e) {
    this.mealService.option = 'search';
    this.mealService.getMeals(
      this.mealService.searchMealLetterURL + e.detail.value
    );
    this.mealService.meals$.subscribe((response) => {
      this.meals = response;
    });
    this._router.navigateByUrl('/list');
    this.mealService.currentQuery =
      'Starting With the Letter: ' + e.detail.value;
  }
}
