/* @flow */

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, TabBarIcon, Card } from '../components';

export default class Feed extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <TabBarIcon color={tintColor} name="time" />,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            marginHorizontal: 20,
          }}
        >
          <Header title="Feed" />
          <Card
            createdAt="2 mins ago"
            desc="Consectetur labore ea nostrud exercitation labore do ut occaecat
                ullamco et. Labore occaecat sunt mollit adipisicing amet mollit
                consequat occaecat laboris. Labore veniam eu eiusmod deserunt
                consectetur sit ex ex. Elit culpa laboris officia sint aliqua
                est deserunt. Et quis ipsum sint laboris."
            imageUrl="https://cdn.pixabay.com/photo/2015/02/18/11/50/mountain-landscape-640617_1280.jpg"
            title="IMSAL Nature Walk (August 2017)"
          />
          <Card
            createdAt="2 days ago"
            desc="Consectetur labore ea nostrud exercitation labore do ut occaecat
                ullamco et. Labore occaecat sunt mollit adipisicing amet mollit
                consequat occaecat laboris. Labore veniam eu eiusmod deserunt
                consectetur sit ex ex. Elit culpa laboris officia sint aliqua
                est deserunt. Et quis ipsum sint laboris."
            imageUrl="https://cdn.pixabay.com/photo/2015/09/02/12/36/startrails-918551_1280.jpg"
            title="Welcoming Evening 2017"
          />
          <Card
            createdAt="2 days ago"
            desc="Consectetur labore ea nostrud exercitation labore do ut occaecat
                ullamco et. Labore occaecat sunt mollit adipisicing amet mollit
                consequat occaecat laboris. Labore veniam eu eiusmod deserunt
                consectetur sit ex ex. Elit culpa laboris officia sint aliqua
                est deserunt. Et quis ipsum sint laboris."
            imageUrl="https://cdn.pixabay.com/photo/2014/07/27/20/29/landscape-403165_1280.jpg"
            title="Trip to Luxembourg - 2017"
          />
        </ScrollView>
      </View>
    );
  }
}
