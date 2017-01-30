/* @flow */

import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Container, Content, Tabs} from 'native-base';

import MapView from './MapView';
import ListView from './ListView';

class AppView extends Component {
  render() {
    return (
      <Container>
          <Content>
              <Tabs>
                  <MapView />
                  <ListView />
              </Tabs>
          </Content>
      </Container>
    );
  }
}

export default connect(
  state => ({
    test: state.getIn(['app', 'test'])
  })
)(AppView);
