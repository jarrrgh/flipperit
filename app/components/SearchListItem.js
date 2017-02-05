/* @flow */

import React, {PropTypes} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../theme/theme';

import Rating from './Rating';

const SearchListItem = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    id: PropTypes.string,
    pinballName: PropTypes.string,
    locationName: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
    distance: PropTypes.number,
    onPress: PropTypes.func
  },
  getContainerStyle() {
    switch (this.props.rating) {
      case 1:
        return styles.containerBad;
      case 4:
      case 5:
        return styles.containerGood;
      case 2:
      case 3:
      default:
        return styles.containerNormal;
    }
  },
  getTitleStyle() {
    switch (this.props.rating) {
      case 1:
        return styles.titleBad;
      case 4:
      case 5:
        return styles.titleGood;
      case 2:
      case 3:
      default:
        return styles.titleNormal;
    }
  },
  getBodyStyle() {
    switch (this.props.rating) {
      case 1:
        return styles.titleBadBody;
      case 4:
      case 5:
        return styles.titleGoodBody;
      case 2:
      case 3:
      default:
        return styles.titleNormalBody;
    }
  },
  getFormattedDistance() {
    return this.props.distance + 'm';
  },
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.getContainerStyle(), this.props.style]}
        onPress={this.props.onPress}>
        <View style={styles.row}>
          <Text style={[styles.title, this.getTitleStyle()]}>{this.props.pinballName}</Text>
          <View style={styles.rating}>
            <Rating value={this.props.rating} color={Colors.star} height={20}/>
          </View>
        </View>
        <View style={[styles.row, {marginTop: 4}]}>
          <Text style={[styles.subtitle, this.getBodyStyle()]}>{this.props.locationName}</Text>
          <Text style={[styles.distance, this.getBodyStyle()]}>{this.getFormattedDistance()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
});

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    margin: 8,
    marginBottom: 0,
    borderRadius: 4
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  subtitle: {
    flex: 1,
    fontSize: 14,
    color: Colors.listItemBody
  },
  rating: {
    alignItems: 'flex-start',
    marginLeft: 8
  },
  distance: {
    fontSize: 14,
    marginLeft: 8,
    color: Colors.listItemBody
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerGood: {
    backgroundColor: Colors.listItemGoodBg
  },
  containerBad: {
    backgroundColor: Colors.listItemBadBg
  },
  containerNormal: {
    backgroundColor: Colors.listItemNormalBg
  },
  titleGood: {
    color: Colors.listItemGood
  },
  titleBad: {
    color: Colors.listItemBad
  },
  titleNormal: {
    color: Colors.listItemNormal
  }
});

export default SearchListItem;
