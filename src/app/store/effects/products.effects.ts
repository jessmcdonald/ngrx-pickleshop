import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, typeOf } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';
import { ProductActionTypes } from '../actions/product.actions';

@Injectable()
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}

    @Effect()
    loadProducts$ = createEffect( this.actions$.pipe(typeOf(ProductActionTypes.LoadAllProducts).map(() =>
        this.productService.getAllProducts().map (
            products => ({
                type: 'Products Loaded',
                payload: products
            })
        ))
    ))
}
