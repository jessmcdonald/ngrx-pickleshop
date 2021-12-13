import { PicklesActionTypes, ActionUnion } from '../actions/manage-pickles.actions';
import { Action } from '@ngrx/store';

export interface State {
  picklesCount: number;
}

export const initialState: State = {
  picklesCount: 1,
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case PicklesActionTypes.SavePickles: {
      console.log(state);
      return {
        ...state,
        picklesCount: state.picklesCount + 1,
      };
    }

    case PicklesActionTypes.RemovePickles: {
      console.log(state);
      return {
        ...state,
        picklesCount: state.picklesCount - 1,
      };
    }

    case PicklesActionTypes.RemoveAllPickles: {
      console.log(state);
      return {
        ...state,
        picklesCount: 0,
      };
    }

    default: {
      console.log(state);
      return state;
    }
  }
}
