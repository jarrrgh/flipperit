/* @flow */

import React, {PropTypes} from 'react';
import {StyleSheet,Text, View} from 'react-native';
import {Colors} from '../theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const starMapping = {1: 1, 2: 1.5, 3: 2, 4: 2.5, 5: 3};

const Rating = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    value: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  },
  renderStar(index, size, color, half) {
    return (
      <Icon
        key={'star-' + index}
        style={{backgroundColor: 'transparent'}}
        name={half ? 'star-half' : 'star'}
        size={size}
        color={color}/>
    );
  },
  render() {
    const stars = [];
    const shades = [];
    const value = starMapping[this.props.value];

    for (var i = 0; i < 3; i++) {
      let size = (i === 1)
        ? this.props.height
        : 0.7 * this.props.height;

      shades.push(this.renderStar(i, size, 'rgba(0, 0, 0, 0.05)'));

      if ((value - i) > 0.5) {
        stars.push(this.renderStar(i, size, this.props.color, true));
      } else if ((value - i) > 0) {
        stars.push(this.renderStar(i, size, this.props.color));
      }
    }
    
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.row}>
          {shades}
        </View>
        <View style={[styles.row, {position: 'absolute', bottom: 0}]}>
          {stars}
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});

export default Rating;
