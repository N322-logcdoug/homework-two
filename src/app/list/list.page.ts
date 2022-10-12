import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public meals = {};
  public query = '';
  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.query = this.mealService.currentQuery;
    this.mealService.meals$.subscribe((response) => {
      this.meals = response;
    });
  }
}
