/* @flow */

import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {Component} from 'react';

import TabView from './TabView';

class AppView extends Component {
  render() {
    return (
      <TabView />
    );
  }
}

export default connect(
  state => ({
    test: state.getIn(['app', 'test'])
  })
)(AppView);
