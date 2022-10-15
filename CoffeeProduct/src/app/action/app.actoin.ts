import { createAction, props } from "@ngrx/store";
import { Coffee } from "../Model/coffee.model";

export const loadCoffeeItems = createAction(
    '[Product list page] Load Coffee List',
    props<{coffees:Coffee[]}>());


export const fetchCoffeeList = createAction(
    'fetch Coffee Items'
)