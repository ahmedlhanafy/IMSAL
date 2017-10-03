import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export default ({
  imageUrl,
  title,
  desc,
  createdAt,
  isLoading,
}: {
  imageUrl: string,
  title: string,
  desc: string,
  createdAt: string,
  isLoading: boolean,
}) =>
  <View style={styles.container}>
    {isLoading &&
      <ImageBackground
        source={require('../../imgs/placeholder.png')}
        borderRadius={8}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{
            padding: 12,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <ShimmerPlaceHolder
            style={{
              height: 12,
              width: 100,
              margin: 4,
              borderRadius: 2,
            }}
            duration={700}
            widthLine={280}
            autoRun
          />
          <ShimmerPlaceHolder
            style={{
              height: 14,
              width: 200,
              margin: 4,
              borderRadius: 2,
            }}
            duration={700}
            widthLine={280}
            autoRun
          />
        </View>
      </ImageBackground>}
    {!isLoading &&
      <ImageBackground
        borderRadius={8}
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      >
        <LinearGradient
          style={styles.textsWrapper}
          colors={['transparent', 'rgba(0,0,0, 0.4)', 'rgb(0,0,0)']}
        >
          <Text style={styles.createAt}>
            {createdAt}
          </Text>
          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </ImageBackground>}
  </View>;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: { height: 16, width: 0 },
    shadowRadius: 16,
    shadowOpacity: 0.22,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 280,
    elevation: 8,
    margin: 12,
  },
  image: {
    height: '100%',
  },
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
  title: {
    fontWeight: '600',
    color: 'white',
    fontSize: 19,
    marginBottom: 2,
  },
  createAt: {
    fontWeight: '300',
    color: 'lightgrey',
    fontSize: 14,
    marginBottom: 2,
  },
  desc: { fontWeight: '400', color: 'white', fontSize: 15 },
});
