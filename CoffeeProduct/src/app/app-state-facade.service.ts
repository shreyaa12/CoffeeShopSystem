import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchCoffeeList } from './action/app.actoin';
import { Coffee } from './Model/coffee.model';
import { coffees } from './selectors/app.selectors';
import { AppState } from './Store';

@Injectable({
  providedIn: 'root'
})
export class AppStateFacadeService {

  constructor(public store:Store<AppState>) { }

  fetchCoffees():void{
    this.store.dispatch(fetchCoffeeList());
  }

  get getCoffeeList(): Observable<Coffee[]>{
    return this.store.select(coffees);
  }
}
