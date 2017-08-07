import React from 'react';
import { View, Text } from 'react-native';

export default ({ title }) =>
  <View>
    {/*TODO: Replace with dynamic statusbar values*/}
    <View style={{ height: 22 }} />
    <Text
      style={{
        paddingVertical: 20,
        fontWeight: 'bold',
        fontSize: 34,
        letterSpacing: -0.0824242,
        color: '#000000',
      }}
    >
      {title}
    </Text>
  </View>;
