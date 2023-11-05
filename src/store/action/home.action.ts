// home.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Home] Load Products');
export const loadProductsSuccess = createAction('[Home] Load Products Success', props<{ products: any[] }>());
export const loadProductsFailure = createAction('[Home] Load Products Failure', props<{ error: any }>());