/* @flow */

import React from 'react';
import {View} from 'react-native';
import {Colors} from '../theme/theme';

const Divider = React.createClass({
  propTypes: {
    style: View.propTypes.style
  },
  render() {
    return <View style={[styles.divider, this.props.style]}/>;
  }
});

const styles = StyleSheet.create({ {
  divider: {
    margin: 10,
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.divider
  }
});

export default Divider;
