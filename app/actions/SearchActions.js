/* @flow */

export const FILTER = 'SearchActions/FILTER';
export const CLEAR_RESULTS = 'SearchActions/CLEAR_RESULTS';

export function filter(searchString) {
  return {
    type: FILTER,
    payload: searchString
  };
}

export function clearResults() {
  return {
    type: CLEAR_RESULTS
  };
}
