/* @flow */

import Immutable from 'immutable';
import * as MapActions from '../actions/map';
import * as SearchActions from '../actions/search';

const initialState = Immutable.fromJS({
  searchString: '',
  isListVisible: false
});

// Reducer
export default function MapStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MapActions.SET_RESULTS_VISIBILITY:
      return state.set('isListVisible', action.payload);
    case SearchActions.FILTER:
      return state.set('searchString', action.payload);
    default:
      return state;
  }
}
