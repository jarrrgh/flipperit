/* @flow */

export const SELECT_PIN = 'MapActions/SELECT_PIN';
export const SET_RESULTS_VISIBILITY = 'MapActions/SET_RESULTS_VISIBILITY';

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
