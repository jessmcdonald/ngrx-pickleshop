import { Component, VERSION } from '@angular/core';
import { select, Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PicklesActionTypes } from './store/actions/manage-pickles.actions';
import { DonutActionTypes } from './store/actions/manage-donuts.actions';
import { AppState } from './store/state/app.state';
import { getDonutsCount } from './store/selectors/donuts.selectors';
import { selectPicklesCount } from './store/selectors/pickles.selectors';
import { DonutsState } from './store/state/donuts.state';
import { PicklesState } from './store/state/pickles.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Pickles & Donut Shop';

  donutsInBasket$: Observable<any> = this.store.select((state) => state.donuts);
  picklesInBasket$: Observable<any> = this.store.select(
    (state) => state.pickles
  );

  constructor(
    private store: Store<AppState>
  ) // private donuts: Store<DonutsState>,
  // private pickles: Store<PicklesState>
  {}

  // Dispatch an addPickles action
  addPickles(pickles: number): void {
    console.log('Dispatching addPickles action');
    this.store.dispatch({
      type: PicklesActionTypes.SavePickles,
      payload: pickles,
    });
  }

  // Dispatch removePickles action
  removePickles(pickles: number): void {
    console.log('Dispatching removePickles action');
    this.store.dispatch({
      type: PicklesActionTypes.RemovePickles,
      payload: pickles,
    });
  }

  // Dispatch removeAllPickles action
  removeAllPickles(): void {
    console.log('Dispatching removeAllPickles action');
    this.store.dispatch({
      type: PicklesActionTypes.RemoveAllPickles,
    });
  }

  // Dispatch an addDonuts action
  addDonuts(donuts: number): void {
    console.log('Dispatching addDonuts action');
    console.log(this.donutsInBasket$);
    this.store.dispatch({
      type: DonutActionTypes.SaveDonuts,
      payload: donuts,
    });
  }

  // Dispatch removeDonuts action
  removeDonuts(donuts: number): void {
    console.log('Dispatching removeDonuts action');
    this.store.dispatch({
      type: DonutActionTypes.RemoveDonuts,
      payload: donuts,
    });
  }

  // Dispatch removeAllDonuts action
  removeAllDonuts(): void {
    console.log('Dispatching removeAllDonuts action');
    this.store.dispatch({
      type: DonutActionTypes.RemoveAllDonuts,
    });
  }
}
