/* @flow */

import 'es6-symbol/implement';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as ApiActions from '../actions/api'
import MapView from './MapView';

const AppView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func
  },
  componentDidMount() {
    this.props.dispatch(ApiActions.fetchPins());
  },
  render() {
    return (
      <MapView />
    );
  }
});

export default connect(
  state => ({
    test: state.getIn(['app', 'test'])
  })
)(AppView);
