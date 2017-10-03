/* @flow */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { isAndroid } from '../config/Constants';

export default (props: { color: string, name: string }) =>
  <Icon
    size={isAndroid ? 24 : 27}
    {...props}
    color={isAndroid ? 'white' : props.color}
    name={`${isAndroid ? 'md' : 'ios'}-${props.name}${isAndroid
      ? ''
      : '-outline'}`}
  />;
