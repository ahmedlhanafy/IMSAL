/* @flow */

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import RCTSFSafariViewController from 'react-native-sfsafariviewcontroller';
import moment from 'moment';
import capitalize from 'lodash.capitalize';
import Placeholder from './Placeholder';
import Content from './Content';
import NoImageContent from './NoImageContent';

const openBrowser = (url: string) => () => RCTSFSafariViewController.open(url);

const formatSecondaryText = (type: string, createdAt: string) =>
  capitalize(type) + ' - ' + moment(createdAt).fromNow();

export default ({
  createdAt,
  imageUrl,
  isLoading,
  title,
  type,
  url,
}: {
  createdAt: string,
  imageUrl: boolean | string,
  isLoading: boolean,
  title: string,
  type: string,
  url: string,
}) =>
  <TouchableOpacity
    onPress={url ? openBrowser(url) : null}
    style={[styles.container, { shadowOpacity: isLoading ? 0.18 : 0.22 }]}
  >
    {isLoading && <Placeholder style={styles.image} />}
    {!isLoading &&
      (imageUrl
        ? <Content
            style={styles.image}
            imageUrl={imageUrl}
            primaryText={title}
            secondaryText={formatSecondaryText(type, createdAt)}
          />
        : <NoImageContent
            primaryText={title}
            secondaryText={formatSecondaryText(type, createdAt)}
          />)}
  </TouchableOpacity>;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: { height: 16, width: 0 },
    shadowRadius: 16,
    shadowOpacity: 0.22,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 8,
    margin: 12,
  },
  image: {
    height: 280,
  },
});
