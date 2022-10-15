
import { createReducer, on} from '@ngrx/store';
import { AppAction } from '../action';
import { Coffee } from '../Model/coffee.model';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  coffees: Coffee[];
}
export const initialState: DashboardState = {
  coffees:[] 
};

export const DashboardReducer = createReducer(
  initialState,
  on(AppAction.loadCoffeeItems,(state,action) => ({
    ...state,
    coffees: action.coffees
  }))
);



// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
