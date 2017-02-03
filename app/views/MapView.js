import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Map from 'react-native-maps';

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
    //alignSelf: 'stretch',
    height: 100

  }
});

export default connect(
  state => ({
  })
)(MapView);
