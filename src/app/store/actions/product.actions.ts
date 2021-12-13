import { Action } from '@ngrx/store';
import { Products } from 'src/app/models/products';

export enum ProductActionTypes {
  LoadAllProducts = 'Load Products',
}

export class LoadAllProducts implements Action {
  readonly type = ProductActionTypes.LoadAllProducts;
  constructor(public payload: Products) {}
}

// This is used in the Reducer as a list of the Actions it can support
export type ActionUnion = LoadAllProducts;
