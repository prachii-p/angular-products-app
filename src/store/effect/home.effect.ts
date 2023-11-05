
  import { Injectable } from '@angular/core';
  import { Actions, createEffect, ofType } from '@ngrx/effects';
  import { of } from 'rxjs';
  import { catchError, map, switchMap } from 'rxjs/operators';
  import { ProductDataService } from '../../app/product-data.service';
  import * as HomeActions from '../action/home.action';
  
  @Injectable()
  export class HomeEffects {
    constructor(private actions$: Actions, private productDataService: ProductDataService) {}
  
    loadProducts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(HomeActions.loadProducts),
        switchMap(() =>
          this.productDataService.products().pipe(
            map((data: any) => HomeActions.loadProductsSuccess({ products: data })),
            catchError((error) => of(HomeActions.loadProductsFailure({ error })))
          )
        )
      )
    );
  }