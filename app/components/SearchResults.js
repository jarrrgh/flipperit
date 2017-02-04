import 'es6-symbol/implement';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const ListView = React.createClass({
  propTypes: {
    style: View.propTypes.style
  },
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
          <Text>List view</Text>
          <Text>List view</Text>
          <Text>List view</Text>
          <Text>List view</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListView;
