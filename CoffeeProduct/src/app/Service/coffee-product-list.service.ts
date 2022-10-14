import { Injectable } from '@angular/core';
import { Coffee } from '../Model/coffee.model';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

@Injectable({
  providedIn: 'root'
})
export class CoffeeProductListService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(baseUrl);
  }
}
