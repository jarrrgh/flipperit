import 'es6-symbol/implement';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutableListView from 'react-native-immutable-list-view';

import SearchListItem from './SearchListItem'

const ListView = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    offsetTop: PropTypes.number,
    offsetBottom: PropTypes.number,
    results: ImmutablePropTypes.list,
    onPressItem: PropTypes.func
  },
  onPressItem(id) {
    if (this.props.onPressItem) {
      this.props.onPressItem(id);
    }
  },
  render() {
    return (
      <ImmutableListView
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={'always'}
        style={[styles.container, this.props.style]}
        immutableData={this.props.results}
        renderRow={item => (
          <SearchListItem
            id={item.get('id')}
            pinballName={item.get('pinballName')}
            locationName={item.get('locationName')}
            rating={item.get('rating')}
            distance={item.get('distance')}
            onPress={this.onPressItem.bind(null, item.get('id'))}
          />)}
        renderHeader={() => (<View style={{height: this.props.offsetTop || 0}}/>)}
        renderFooter={() => (<View style={{height: this.props.offsetBottom || 0}}/>)}
      />
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListView;
