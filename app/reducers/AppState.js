/* @flow */

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  test: 'test'
});

// Reducer
export default function AppStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
