/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, TabBarIcon } from '../components';

export default class PrayerTimes extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon name="watch" color={tintColor} />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Prayer Times" />
      </View>
    );
  }
}
