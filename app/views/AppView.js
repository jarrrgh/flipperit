/* @flow */

import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {Component} from 'react';

import MapView from './MapView';

class AppView extends Component {
  render() {
    return (
      <MapView />
    );
  }
}

export default connect(
  state => ({
    test: state.getIn(['app', 'test'])
  })
)(AppView);
