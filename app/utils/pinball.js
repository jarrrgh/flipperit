/* @flow */
import DOMParser from 'react-native-html-parser';

export function parsePins(html) {
  try {
    const parser = new DOMParser.DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const table = doc.getElementsByTagName('table')[3];
  } catch(e) {
    console.log('Failed to parse html response.', e);
  }
}
