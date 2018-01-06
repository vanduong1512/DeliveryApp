/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';

import App from './src/App';
import store from './src/redux/store';

export default class myApp extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}