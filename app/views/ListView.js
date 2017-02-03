import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ListView extends Component {
  render() {
    return (
      <View>
          <Text>List view</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
  })
)(ListView);
