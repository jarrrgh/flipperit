/* @flow */

export const FILTER = 'Search/FILTER';
export const CLEAR_RESULTS = 'Search/CLEAR_RESULTS';

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
