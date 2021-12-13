import {
  DonutActionTypes,
  ActionUnion,
} from '../actions/manage-donuts.actions';
import { Action } from '@ngrx/store';

export interface State {
  donutsCount: number;
}

export const initialState: State = {
  donutsCount: 1,
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case DonutActionTypes.SaveDonuts: {
      console.log(state);
      return {
        ...state,
        donutsCount: state.donutsCount + 1,
      };
    }

    case DonutActionTypes.RemoveDonuts: {
      console.log(state);
      return {
        ...state,
        donutsCount: state.donutsCount - 1,
      };
    }

    case DonutActionTypes.RemoveAllDonuts: {
      console.log(state);
      return {
        ...state,
        donutsCount: 0,
      };
    }

    default: {
      console.log(state);
      return state;
    }
  }
}
