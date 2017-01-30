import 'es6-symbol/implement';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';

class ListView extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>List view</Text>
        </Content>
      </Container>
    );
  }
}

export default connect(
  state => ({
  })
)(ListView);
