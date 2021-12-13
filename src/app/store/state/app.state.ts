import { DonutsState } from './donuts.state';
import { PicklesState } from './pickles.state';

export interface AppState {
  donuts: DonutsState;
  pickles: PicklesState;
}
