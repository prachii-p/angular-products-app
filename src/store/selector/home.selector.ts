import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../reducer/home.reducer';

// Create a feature selector for the HomeComponent state
export const selectHomeState = createFeatureSelector<HomeState>('home');

// Select the products data from the HomeComponent state
export const selectProducts = createSelector(
  selectHomeState,
  (state: HomeState) => state.products
);

// Select the loading state from the HomeComponent state
export const selectLoading = createSelector(
  selectHomeState,
  (state: HomeState) => state.loading
);

// Select the error state from the HomeComponent state
export const selectError = createSelector(
  selectHomeState,
  (state: HomeState) => state.error
);