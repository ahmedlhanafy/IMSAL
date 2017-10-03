/* @flow */

import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const Placeholder = ({ style }: { style: any }) =>
  <ImageBackground
    source={require('../../../imgs/placeholder.png')}
    borderRadius={8}
    resizeMode="cover"
    style={style}
  >
    <View style={styles.container}>
      <ShimmerPlaceHolder
        style={styles.secondaryShimmer}
        duration={700}
        widthLine={280}
        autoRun
      />
      <ShimmerPlaceHolder
        style={styles.primaryShimmer}
        duration={700}
        widthLine={280}
        autoRun
      />
    </View>
  </ImageBackground>;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  primaryShimmer: {
    height: 14,
    width: 200,
    margin: 4,
    borderRadius: 2,
  },
  secondaryShimmer: {
    height: 12,
    width: 100,
    margin: 4,
    borderRadius: 2,
  },
});

export default Placeholder;
