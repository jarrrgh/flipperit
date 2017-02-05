/* @flow */

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  searchString: ''
});

// Reducer
export default function AppStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
