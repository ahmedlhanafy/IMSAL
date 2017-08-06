/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, TabBarIcon } from '../components';

export default class More extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <TabBarIcon name="three-bars" color={tintColor} />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="More" />
      </View>
    );
  }
}
