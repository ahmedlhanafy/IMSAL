/* @flow */

import React from 'react';
import { View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import color from 'color';
import { Feed, About, PrayerTimes } from './screens';
import { Inactive, TabBarBackground, Primary } from './config/Colors';

// const MyApp = TabNavigator(
//   {
//     Feed: {
//       screen: Feed,
//     },
//     PrayerTimes: {
//       screen: PrayerTimes,
//     },
//     About: {
//       screen: About,
//     },
//   },
//   {
//     tabBarComponent: NavigationComponent,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       bottomNavigationOptions: {
//         activeLabelColor: 'white',
//         labelColor: 'white',
//         rippleColor: 'white',
//         shifting: true,
//         backgroundColor: TabBarBackground,
//       },
//     },
//   }
// );

const MyApp = TabNavigator(
  {
    Feed: {
      screen: Feed,
    },
    PrayerTimes: {
      screen: PrayerTimes,
    },
    About: {
      screen: About,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Primary,
      inactiveTintColor: Inactive,
      style: {
        backgroundColor: TabBarBackground,
      },
      lazy: true,
      showLabel: false,
      showIcon: true,
    },
  }
);

export default () =>
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor={color(TabBarBackground).darken(0.4).rgb()} />
    <MyApp />
  </View>;
