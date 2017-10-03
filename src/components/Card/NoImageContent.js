/* @flow */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { TabBarBackground } from '../../config/Colors';

const NoImageContent = ({
  primaryText,
  secondaryText,
}: {
  primaryText: string,
  secondaryText?: string,
}) =>
  <View style={styles.container}>
    <Text primary={primaryText} secondary={secondaryText} />
  </View>;

const styles = StyleSheet.create({
  container: {
    backgroundColor: TabBarBackground,
    borderRadius: 8,
    padding: 16,
  },
});

export default NoImageContent;
