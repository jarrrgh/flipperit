/* @flow */
import {AsyncStorage} from 'react-native';
import Endpoints from '../endpoints';

const fetchPins = () => cachedFetch(Endpoints.pins);

const cachedFetch = (url) => {
  return flibuFetch(url)
  .then(response => {
    return AsyncStorage.setItem(url, response)
      .then(() => response);
  })
  .catch(error => {
    if (error.status) {
      throw error;
    }

    // In case of a network failure, return data from cache
    console.log('Error caught on API-fetch', error);
    return AsyncStorage.getItem(url)
    .then(value => {
      if (value != null) {
        return Promise.resolve(value);
      } else {
        return Promise.reject(null);
      }
    });
  });
}

const flibuFetch = (url) => {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest()

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve('response' in xhr ? xhr.response : xhr.responseText);
      } else {
        const error = new Error(xhr.responseText);
        error.status = xhr.status;
        error.statusText = xhr.statusText;
        reject(error);
      }
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'));
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'));
    }

    xhr.open("GET", Endpoints.pins, true);
    xhr.send();
  });
};

export default {
  fetchPins
};
