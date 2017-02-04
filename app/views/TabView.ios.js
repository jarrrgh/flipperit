/* @flow */

import React, {PropTypes} from 'react';
import {TabBarIOS, View} from 'react-native';
import {Colors} from '../theme/theme';

import MapView from './MapView';
import ListView from './ListView';

import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    currentTab: PropTypes.string
  },
  render() {
    return (
      <View style={{flex: 1}}>
        <TabBarIOS tintColor={Colors.tabBg} translucent={true}>
          <Icon.TabBarItem
            iconName='ios-pin-outline'
            selectedIconName='ios-pin'
            title='Flipperit'
            selected={this.props.currentTab === Tabs.MAP}
            onPress={() => { this._onChangeTab(Tabs.MAP); }}>
            <MapView />
          </Icon.TabBarItem>
          <Icon.TabBarItem
            iconName='ios-nutrition-outline'
            selectedIconName='ios-nutrition'
            title='Mainokset'
            selected={this.props.currentTab === Tabs.INFO}
            onPress={() => { this._onChangeTab(Tabs.INFO); }}>
            <View />
          </Icon.TabBarItem>
        </TabBarIOS>
      </View>
    );
  }
});

export default Tabs;
