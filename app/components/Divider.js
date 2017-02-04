/* @flow */

import React from 'react';
import {View} from 'react-native';
import {Colors} from '../style/theme';

const Divider = React.createClass({
  propTypes: {
    style: View.propTypes.style
  },
  render() {
    return <View style={[styles.divider, this.propTypes.style]}/>;
  }
});

const styles = {
  divider: {
    margin: 10,
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.divider
  }
};

export default Divider;
