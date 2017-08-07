import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default ({ imageUrl, title, desc, createdAt }) =>
  <View style={styles.container}>
    <View style={styles.imageWrapper}>
      <Image
        resizeMode="cover"
        style={{
          height: 200,
        }}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
    <View style={styles.textsWrapper}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.createAt}>
        {createdAt}
      </Text>
      <Text numberOfLines={2} style={styles.desc}>
        {desc}
      </Text>
    </View>
  </View>;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(0,0,0,0.14)',
    shadowOffset: { height: 16, width: 0 },
    shadowRadius: 16,
    shadowOpacity: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    marginBottom: 24,
  },
  imageWrapper: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 17,
    marginBottom: 2,
  },
  createAt: {
    fontWeight: '300',
    color: 'grey',
    fontSize: 14,
    marginBottom: 8,
  },
  textsWrapper: { padding: 12, paddingBottom: 16 },
  desc: { fontWeight: '400', color: 'black', fontSize: 15 },
});
