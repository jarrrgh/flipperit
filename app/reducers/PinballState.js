/* @flow */

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
});

export default function ContactStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
