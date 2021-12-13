import { createSelector } from '@ngrx/store';
import { PicklesState } from '../state/pickles.state';

export const selectPickles = (state: PicklesState) => state;

export const selectPicklesCount = createSelector(
  selectPickles,
  (state: PicklesState) => state.PicklesCount
);
