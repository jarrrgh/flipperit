import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';

class MapView extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Map</Text>
        </Content>
      </Container>
    );
  }
}

export default connect(
  state => ({
  })
)(MapView);
