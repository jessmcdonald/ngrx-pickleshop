import * as pickleReducer from './pickles-reducers';
import * as donutReducer from './donuts-reducers';
import { PicklesState } from '../state/pickles.state';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  pickles: pickleReducer.State;
  donuts: donutReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  pickles: pickleReducer.reducer,
  donuts: donutReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [];