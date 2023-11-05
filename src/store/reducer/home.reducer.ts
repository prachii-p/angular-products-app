import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from '../action/home.action';

export interface HomeInfo {
    id : number,
    title : string,
    price : number,
    description : string,
    category : string,
    image : string,
    rating : {rate:number, count:number}
};
export interface HomeState {
  products: any;
  loading: boolean;
  error: any;
}

const initialState: HomeState = {
  products: [],
  loading: false,
  error: null,
};

const homeReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products, loading: false })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error, loading: false })),
);

export function reducer(state: HomeState | undefined, action: any) {
  return homeReducer(state, action);
}