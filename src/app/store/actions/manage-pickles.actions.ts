import { Action } from '@ngrx/store';
import { Pickles } from '../../models/pickles';

export enum PicklesActionTypes {
  SavePickles = 'Save Pickles',
  RemovePickles = 'Remove Pickle',
  RemoveAllPickles = 'Remove All Pickles',
}

export class SavePickles implements Action {
  readonly type = PicklesActionTypes.SavePickles;
  constructor(public payload: Pickles) {}
}

export class RemovePickles implements Action {
  readonly type = PicklesActionTypes.RemovePickles;
  constructor(public payload: Pickles) {}
}

export class RemoveAllPickles implements Action {
  readonly type = PicklesActionTypes.RemoveAllPickles;
  constructor(public payload: Pickles) {}
}

// This is used in the Reducer as a list of the Actions it can support
export type ActionUnion = SavePickles | RemovePickles | RemoveAllPickles;
