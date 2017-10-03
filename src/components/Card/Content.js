/* @flow */

import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';

const Content = ({
  imageUrl,
  primaryText,
  secondaryText,
  style,
}: {
  imageUrl: string,
  primaryText: string,
  secondaryText?: string,
  style?: any,
}) =>
  <ImageBackground
    borderRadius={8}
    resizeMode="cover"
    style={style}
    source={{
      uri: imageUrl,
    }}
  >
    <LinearGradient
      style={styles.textsWrapper}
      colors={[
        'transparent',
        'rgba(0,0,0, 0.4)',
        'rgba(0,0,0, 0.6)',
        'rgb(0,0,0)',
      ]}
    >
      <Text primary={primaryText} secondary={secondaryText} />
    </LinearGradient>
  </ImageBackground>;

const styles = StyleSheet.create({
  textsWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    paddingBottom: 16,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
});

export default Content;
