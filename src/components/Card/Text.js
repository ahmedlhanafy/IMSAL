/* @flow */

import React from 'react';
import { View, Text as RNText, StyleSheet } from 'react-native';

const Text = ({
  primary,
  secondary,
}: {
  primary: string,
  secondary?: string,
}) =>
  <View>
    <RNText style={styles.secondary}>
      {secondary}
    </RNText>
    <RNText style={styles.primary}>
      {primary}
    </RNText>
  </View>;

const styles = StyleSheet.create({
  primary: {
    fontWeight: '600',
    color: 'white',
    fontSize: 19,
  },
  secondary: {
    fontWeight: '300',
    color: 'lightgrey',
    fontSize: 14,
  },
});

export default Text;
