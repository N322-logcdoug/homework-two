import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  public randomMealURL: string =
    'https://www.themealdb.com/api/json/v1/1/random.php';

  public searchMealNameURL: string =
    'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  public searchMealLetterURL: string =
    'https://www.themealdb.com/api/json/v1/1/search.php?f=';

  public mealDetailsFromID: string =
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  public letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  public currentQuery = '';

  public meals$: Observable<Array<Object>>;

  public option: string;

  constructor(private http: HttpClient) {}

  getMeals(url: string) {
    this.meals$ = this.http.get<any>(url);
  }
}
