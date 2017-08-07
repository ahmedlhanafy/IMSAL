/* @flow */

import { TabNavigator } from 'react-navigation';
import { Feed, About, PrayerTimes } from './screens';
import { Inactive, TabBarBackground, Primary } from './config/Colors';

export default TabNavigator(
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
    },
  }
);
