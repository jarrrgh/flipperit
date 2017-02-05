/* @flow */

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  pinballs: [
    {id: '1', pinballName: 'Monster Bash', locationName: 'Ikuri Arcade', rating: 1, distance: 50},
    {id: '2', pinballName: 'Tales of Arabian Nights', locationName: 'Galaxy Center', rating: 2, distance: 150},
    {id: '3', pinballName: 'Theatre of Magic', locationName: 'Space Bowling', rating: 3, distance: 250},
    {id: '4', pinballName: 'Scared Stiff', locationName: 'Wanha Tappi', rating: 4, distance: 10050},
    {id: '5', pinballName: 'White Water', locationName: 'Wanha Tappi', rating: 5, distance: 21050},
  ]
});

export default function ContactStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
