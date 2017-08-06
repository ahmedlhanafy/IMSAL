/* @flow */

import { TabNavigator } from 'react-navigation';
import { Feed, More, PrayerTimes } from './screens';
import { Inactive, TabBarBackground, Primary } from './config/Colors';

export default TabNavigator(
  {
    Feed: {
      screen: Feed
    },
    PrayerTimes: {
      screen: PrayerTimes
    },
    More: {
      screen: More
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Primary,
      inactiveTintColor: Inactive,
      style: {
        backgroundColor: TabBarBackground
      },
      lazy: true,
      showLabel: false
    }
  }
);
