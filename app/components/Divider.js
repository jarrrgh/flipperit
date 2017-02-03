/* @flow */

import React from 'react';
import {View} from 'react-native';
import {Colors} from '../style/theme';

const Divider = React.createClass({
  propTypes: {
    style: View.propTypes.style
  },
  render() {
    let combinedStyles = Object.assign({},
      styles.divider,
      this.props.style
    );

    return <View style={combinedStyles}/>;
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
