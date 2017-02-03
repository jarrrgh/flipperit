/* @flow */

import React from 'react';
import {TabBarIOS, View} from 'react-native';
import {Colors} from '../theme/theme';

import MapView from './MapView';
import ListView from './ListView';

import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = React.createClass({
  propTypes: {
    style: View.propTypes.style
  },
  render() {
    return (
      <View style={{flex: 1}}>
        <TabBarIOS tintColor={Colors.tabBg} translucent={true} >
          <Icon.TabBarItem
            iconName='ios-clock-outline'
            selectedIconName='ios-clock'
            title='Events'
            selected={this.props.currentTab === Tabs.CALENDAR}
            onPress={() => { this._onChangeTab(Tabs.CALENDAR); }}>
            <ListView />
          </Icon.TabBarItem>

          <Icon.TabBarItem
            iconName='ios-location-outline'
            selectedIconName='ios-location'
            title='Map'
            selected={this.props.currentTab === Tabs.MAP}
            onPress={() => { this._onChangeTab(Tabs.MAP); }}>
            <MapView />
          </Icon.TabBarItem>

        </TabBarIOS>
      </View>
    );
  }
});

export default Tabs;
