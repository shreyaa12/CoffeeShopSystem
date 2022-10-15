import { createFeatureSelector, createSelector } from "@ngrx/store";
import { dashboardFeatureKey, DashboardState } from "../reducers";

export const dashboardState = createFeatureSelector<DashboardState>(dashboardFeatureKey);

export const coffees = createSelector(
    dashboardState,
    (state) => state.coffees
);