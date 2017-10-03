/* @flow */

import React from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export default ({
  title,
  style,
  animation,
}: {
  title: string,
  style: any,
  animation: Animated.AnimatedValue,
}) =>
  <View style={style}>
    <Animated.View
      style={[
        styles.normalTitleContainer,
        {
          opacity: animation
            ? animation.interpolate({
                inputRange: [20, 80],
                outputRange: [0, 1],
              })
            : 1,
        },
      ]}
    >
      <Text style={styles.normalTitleText}>
        {title}
      </Text>
    </Animated.View>
    <Animated.View
      style={[
        styles.bigTitleContainer,
        {
          transform: [
            {
              translateY: animation
                ? animation.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -200],
                    extrapolate: 'clamp',
                  })
                : 0,
            },
          ],
        },
      ]}
    >
      <Text style={styles.bigTitleText}>
        {title}
      </Text>
    </Animated.View>
  </View>;

const styles = StyleSheet.create({
  normalTitleContainer: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    height: 44 + 22,
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 3,
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalTitleText: {
    lineHeight: 22,
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: -0.41,
    color: '#000000',
    fontWeight: '500',
  },
  bigTitleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    paddingTop: 22,
    backgroundColor: 'white',
  },
  bigTitleText: {
    paddingVertical: 27,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    fontSize: 34,
    letterSpacing: -0.0824242,
    color: '#000000',
  },
});
