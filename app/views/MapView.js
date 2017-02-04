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
          <SearchBox style={styles.searchBox} />
          <SearchResults />
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
    flex: 1,
    height: 100
  },
  search: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 20
  },
  searchBox: {
  }
});

export default connect(
  state => ({
  })
)(MapView);
