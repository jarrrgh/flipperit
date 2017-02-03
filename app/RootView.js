import 'es6-symbol/implement'
import {Provider, connect} from 'react-redux';
import React, {Component} from 'react';

import store from './redux/store';
import AppView from './views/AppView';

class RootView extends Component {
    render() {
        return (
          <Provider store={store}>
            <AppView />
          </Provider>
        );
    }
}

export default RootView;
