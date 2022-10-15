import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppState } from "src/app/Store";
import { CoffeeProductListService } from "../Service/coffee-product-list.service";
import { AppAction } from "../action";
import { catchError, switchMap } from "rxjs/operators";
import { loadCoffeeItems } from "../action/app.actoin";

@Injectable()
export class AppEffects {
    constructor(private actions$:Actions, private store : Store<AppState>, private CoffeeService:CoffeeProductListService){};
    
    fetchCoffeeList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppAction.fetchCoffeeList),
            switchMap((action) => {
                return this.CoffeeService.getAll().pipe(
                    switchMap((resp) => {
                        return [loadCoffeeItems({coffees:resp})];
                    }),
                    catchError((error) => {
                        return [error];
                    })
                );
            })
        );
    })

}