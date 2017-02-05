import 'es6-symbol/implement';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Immutable from 'immutable';
import ImmutableListView from 'react-native-immutable-list-view';

import SearchListItem from './SearchListItem'

const ListView = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    offsetTop: PropTypes.number,
    offsetBottom: PropTypes.number
  },
  render() {
    const dummyList = Immutable.fromJS([
      {id: '1', pinballName: 'Monster Bash', locationName: 'Ikuri Arcade', rating: 1, distance: 50},
      {id: '2', pinballName: 'Tales of Arabian Nights', locationName: 'Galaxy Center', rating: 2, distance: 150},
      {id: '3', pinballName: 'Theatre of Magic', locationName: 'Space Bowling', rating: 3, distance: 250},
      {id: '4', pinballName: 'Scared Stiff', locationName: 'Wanha Tappi', rating: 4, distance: 10050},
      {id: '5', pinballName: 'White Water', locationName: 'Wanha Tappi', rating: 5, distance: 21050},
    ]);
    return (
      <ImmutableListView
        style={[styles.container, this.props.style]}
        immutableData={dummyList}
        renderRow={item => (
          <SearchListItem
            id={item.get('id')}
            pinballName={item.get('pinballName')}
            locationName={item.get('locationName')}
            rating={item.get('rating')}
            distance={item.get('distance')}
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
