import { Donuts } from '../../models/donuts';

export interface DonutsState {
  DonutsCount: number;
}

export const initialState: DonutsState = {
  DonutsCount: 0,
};
