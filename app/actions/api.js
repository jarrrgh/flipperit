/* @flow */
import api from '../services/fetch';
import {createRequestActionTypes} from '.';

const {
  GET_PINS_REQUEST,
  GET_PINS_SUCCESS,
  GET_PINS_FAILURE
} = createRequestActionTypes('GET_PINS');

export const PARSE_PINS = 'Api/PARSE_PINS';

export const fetchPins = () => {
  return (dispatch) => {
    dispatch({type: GET_PINS_REQUEST});

    api.fetchPins()
      .then(html => {
        console.log(html);
        dispatch({
          type: PARSE_PINS,
          payload: html
        });

        dispatch({type: GET_PINS_SUCCESS});
      })
      .catch(error => dispatch({
        type: GET_PINS_FAILURE,
        error: true,
        payload: error
      }));
  };
};
