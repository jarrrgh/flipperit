/* @flow */

import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Map from 'react-native-maps';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import * as MapActions from '../actions/MapActions';
import * as SearchActions from '../actions/SearchActions';
import {filterPins} from '../utils/filter';
import {Colors} from '../theme/theme';

import dismissKeyboard from 'react-native-dismiss-keyboard';

const MapView = React.createClass({
  propTypes: {
    searchString: PropTypes.string,
    results: ImmutablePropTypes.list,
    isListVisible: PropTypes.bool,
    selectPin: PropTypes.func,
    setResultsVisibility: PropTypes.func,
    filter: PropTypes.func,
    clearResults: PropTypes.func
  },
  getInitialState() {
    return {
      isListVisible: false
    };
  },
  onFocus() {
    this.props.setResultsVisibility(true);
    console.log('show');
    this.setState({isListVisible: true});
  },
  onBlur() {
    /*
    this.props.setResultsVisibility(false);
    console.log('hide');
    this.setState({isListVisible: false});
    */
  },
  onChangeText(text) {
    console.log('search text', text);
    this.props.filter(text);
  },
  onSubmit() {
    this.setState({isListVisible: false});
  },
  onPressOutside() {
    dismissKeyboard();
    this.setState({isListVisible: false});
  },
  onPressItem(id) {
    console.log('onPressItem '+id);
    dismissKeyboard();
    this.setState({isListVisible: false});
  },
  render() {
    console.log('this.props.isListVisible', this.props.isListVisible);
    return (
      <View style={styles.container}>
        <Map
          rotateEnabled={false}
          //initialRegion={region}
          style={styles.map}
          //<MapView.Marker coordinate={location.toJS()}/>
        >
        </Map>
        <View style={[styles.search, this.state.isListVisible ? {bottom: 0} : {}]}>
          <TouchableOpacity
            style={{flex: 1}}
            activeOpacity={1}
            onPress={this.onPressOutside}>
            {this.state.isListVisible
              ? <SearchResults
              results={this.props.results}
              offsetTop={80}
              offsetBottom={200}
              onPressItem={this.onPressItem}/>
              : null}
          </TouchableOpacity>
          <View style={styles.toolbar}>
            <SearchBox
              ref='searchBox'
              style={{flex: 1}}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChangeText={this.onChangeText}
              onSubmit={this.onSubmit}/>
            <TouchableOpacity style={styles.infoButton}>
              <Icon
                style={{backgroundColor: 'transparent'}}
                name={'adjust'}
                size={44}
                color={Colors.inputIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  search: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  toolbar: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  infoButton: {
    height: 44,
    width: 44,
    margin: 10,
    marginLeft: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(
  state => {
    const searchString = state.getIn(['map', 'searchString']);
    const pins = state.getIn(['pinball', 'pinballs']);
    const results = filterPins(pins, searchString);

    return {
      searchString,
      results,
      isListVisible: state.getIn(['map', 'isListVisible']),
    }
  },
  dispatch => ({
    selectPin(id) {
      dispatch(MapActions.selectPin(id));
    },
    setResultsVisibility(visible) {
      dispatch(MapActions.setResultsVisibility(visible));
    },
    filter(searchString) {
      dispatch(SearchActions.filter(searchString));
    },
    clearResults() {
      dispatch(SearchActions.clearResults());
    }
  })
)(MapView);
