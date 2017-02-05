import 'es6-symbol/implement';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Map from 'react-native-maps';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import {Colors} from '../theme/theme';

class MapView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Map
          rotateEnabled={false}
          //initialRegion={region}
          style={styles.map}
          //<MapView.Marker coordinate={location.toJS()}/>
        >
        </Map>
        <View style={styles.search}>
          <SearchResults offsetTop={80} offsetBottom={200} />
          <SearchBox style={styles.searchBox} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  map: {
    flex: 1
  },
  search: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  searchBox: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default connect(
  state => ({
  })
)(MapView);
