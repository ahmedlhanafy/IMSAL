/* @flow */

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, TabBarIcon, Card } from '../components';

export default class Feed extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon color={tintColor} name="time" />,
  };

  render() {
    return <View style={{ flex: 1 }} />;
  }
}
