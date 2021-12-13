import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store/src/selector';
import { DonutsState } from '../state/donuts.state';

const getDonutsState = createFeatureSelector<DonutsState>('donutsCount');

//export const selectDonuts = (state: DonutsState) => state;

export const getDonutsCount = createSelector(getDonutsState, (state) => {
  return state.DonutsCount;
});
