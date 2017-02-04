/* @flow */

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform
} from 'react-native';
import {Colors} from '../theme/theme';

const SearchBox = React.createClass({
  propTypes: {
    style: View.propTypes.style
  },
  render() {
    return (
      <TextInput
        style={[styles.textInput, this.props.style]}
        selectionColor={Colors.selection}
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        autoCapitalize={'none'}
        autoFocus={false}
        placeholderTextColor={Colors.placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmit}
        value={this.props.projectCode} />
    );
  }
});

const styles = StyleSheet.create({
  textInput: {
    height: 44,
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: Colors.background,
    borderColor: Colors.inputBorder,
    borderWidth: 0,
    borderRadius: 22,
    fontSize: 17
  }
});

export default SearchBox;
