/* @flow */

export const SELECT_PIN = 'Map/SELECT_PIN';
export const SET_RESULTS_VISIBILITY = 'Map/SET_RESULTS_VISIBILITY';

export function selectPin(id) {
  return {
    type: SELECT_PIN,
    payload: id
  };
}

export function setResultsVisibility(visible) {
  return {
    type: SET_RESULTS_VISIBILITY,
    payload: visible
  };
}
