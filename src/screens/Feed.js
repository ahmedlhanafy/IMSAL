/* @flow */

import React, { Component } from 'react';
import { View, ScrollView, LayoutAnimation } from 'react-native';
import { Header, TabBarIcon, CardGradient } from '../components';

const data = [
  {
    createdAt: '2 mins ago',
    desc: `Consectetur labore ea nostrud exercitation labore do ut occaecat
            ullamco et. Labore occaecat sunt mollit adipisicing amet mollit
            consequat occaecat laboris. Labore veniam eu eiusmod deserunt
            consectetur sit ex ex. Elit culpa laboris officia sint aliqua
            est deserunt. Et quis ipsum sint laboris.`,
    imageUrl:
      'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    title: 'IMSAL Nature Walk (August 2017)',
  },
  {
    createdAt: '2 days ago',
    desc: `Consectetur labore ea nostrud exercitation labore do ut occaecat
            ullamco et. Labore occaecat sunt mollit adipisicing amet mollit
            consequat occaecat laboris. Labore veniam eu eiusmod deserunt
            consectetur sit ex ex. Elit culpa laboris officia sint aliqua
            est deserunt. Et quis ipsum sint laboris.`,
    imageUrl:
      'https://static.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg',
    title: 'Welcoming Evening 2017',
  },
  {
    createdAt: '7 days ago',
    desc: `Consectetur labore ea nostrud exercitation labore do ut occaecat
                ullamco et. Labore occaecat sunt mollit adipisicing amet mollit
                consequat occaecat laboris. Labore veniam eu eiusmod deserunt
                consectetur sit ex ex. Elit culpa laboris officia sint aliqua
                est deserunt. Et quis ipsum sint laboris.`,
    imageUrl:
      'https://static.pexels.com/photos/440731/pexels-photo-440731.jpeg',
    title: "Sisters' Study Circle",
  },
  {
    createdAt: '1 week ago',
    desc: `Consectetur labore ea nostrud exercitation labore do ut occaecat
                ullamco et. Labore occaecat sunt mollit adipisicing amet mollit
                consequat occaecat laboris. Labore veniam eu eiusmod deserunt
                consectetur sit ex ex. Elit culpa laboris officia sint aliqua
                est deserunt. Et quis ipsum sint laboris.`,
    imageUrl:
      'https://static.pexels.com/photos/131723/pexels-photo-131723.jpeg',
    title: 'Trip to Luxembourg - 2017',
  },
];

export default class Feed extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <TabBarIcon name="paper" color={tintColor} />,
  };
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }, 400);
  }
  render() {
    const { isLoading } = this.state;
    const cards = data.map((c, i) => <CardGradient key={i} {...c} />);
    return (
      <View style={{ flex: 1 }}>
        {isLoading &&
          <View style={{ alignItems: 'center' }}>
            <Header title="Feed" />
            <CardGradient isLoading />
            <CardGradient isLoading />
            <CardGradient isLoading />
          </View>}
        {!isLoading &&
          <ScrollView contentContainerStyle={{}}>
            <Header title="Feed" />
            {cards}
          </ScrollView>}
      </View>
    );
  }
}
