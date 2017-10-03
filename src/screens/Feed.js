/* @flow */

import React, { Component } from 'react';
import {
  View,
  LayoutAnimation,
  Animated,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Header, TabBarIcon, Card } from '../components';
import { Post } from '../types';

export default class Feed extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <TabBarIcon name="paper" color={tintColor} />,
  };
  state = {
    isLoading: true,
    toolbarAnimation: new Animated.Value(0),
    data: [],
  };
  async componentDidMount() {
    try {
      const data = await this._fetchPage(this._pageNumber);
      this.setState({ isLoading: false, data }, () => {
        this._pageNumber++;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      });
    } catch (e) {
      // @todo: Add nice illustration with lottie
    }
  }

  _pageNumber = 1;
  _fetchPage = async (pageNumber: number = 1): Array<Post> => {
    const res = await fetch(
      `https://www.imsal.be/wp-content/themes/attitude-child/imsalAppTokens.php?AppFeed=1&page=${pageNumber}`
    );
    return await res.json();
  };

  _loadMore = async () => {
    try {
      const data = await this._fetchPage(this._pageNumber);
      if (data.length > 0) {
        this.setState({ data: [...this.state.data, ...data] }, () => {
          this._pageNumber++;
        });
      }
    } catch (e) {
      // Do nothing
    }
  };

  _renderItem = ({ item }: { item: Post }) =>
    <Card
      imageUrl={item.img}
      title={item.title}
      type={item.type}
      url={item.url}
      createdAt={item.created_at}
    />;
  _keyExtractor = (_, index) => index;

  render() {
    const { isLoading, toolbarAnimation, data } = this.state;

    return (
      <View style={styles.container}>
        <Header
          style={styles.header}
          animation={toolbarAnimation}
          title="Feed"
        />
        {isLoading &&
          <View style={styles.list}>
            <Card isLoading />
            <Card isLoading />
            <Card isLoading />
          </View>}
        {!isLoading &&
          <FlatList
            data={data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: toolbarAnimation,
                  },
                },
              },
            ])}
            contentContainerStyle={styles.list}
            scrollEventThrottle={16}
            onEndReached={this._loadMore}
          />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { zIndex: 1 },
  list: { paddingTop: 92 + 22 },
});
