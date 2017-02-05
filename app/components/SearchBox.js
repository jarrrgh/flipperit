/* @flow */

import React, {PropTypes} from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Colors} from '../theme/theme';

import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBox = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onTextChange: PropTypes.func,
    onSubmit: PropTypes.func
  },
  onFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  },
  onBlur() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },
  onChangeText(text) {
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  },
  onSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  },
  render() {
    return (
      <View style={[styles.searchBox, this.props.style]}>
        <TextInput
          style={styles.textInput}
          selectionColor={Colors.selection}
          underlineColorAndroid={'transparent'}
          autoCorrect={false}
          autoCapitalize={'none'}
          autoFocus={false}
          blurOnSubmit={true}
          placeholderTextColor={Colors.placeholder}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmit}
          value={this.props.projectCode} />
        <TouchableOpacity style={styles.closeButton}>
          <Icon
            name={'clear'}
            size={24}
            color={Colors.inputIcon} />
        </TouchableOpacity>
      </View>
    );
  }
});

const HEIGHT = 44;

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: HEIGHT,
    margin: 10,
    paddingLeft: 16,
    paddingRight: 0,
    elevation: 2,
    backgroundColor: Colors.background,
    borderRadius: 22,
    borderWidth: 0,
  },
  textInput: {
    flex: 1,
    fontSize: 17
  },
  closeButton: {
    width: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SearchBox;
