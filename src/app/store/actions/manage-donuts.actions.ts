import { Action } from '@ngrx/store';
import { Donuts } from '../../models/donuts';

export enum DonutActionTypes {
  SaveDonuts = 'Save Donuts',
  RemoveDonuts = 'Remove Donut',
  RemoveAllDonuts = 'Remove All Donuts',
}

export class SaveDonuts implements Action {
  readonly type = DonutActionTypes.SaveDonuts;
  constructor(public payload: Donuts) {}
}

export class RemoveDonuts implements Action {
  readonly type = DonutActionTypes.RemoveDonuts;
  constructor(public payload: Donuts) {}
}

export class RemoveAllDonuts implements Action {
  readonly type = DonutActionTypes.RemoveAllDonuts;
  constructor(public payload: Donuts) {}
}

// This is used in the Reducer as a list of the Actions it can support
export type ActionUnion = SaveDonuts | RemoveDonuts | RemoveAllDonuts;
