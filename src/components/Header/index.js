import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CB954',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ios: {
    height: 64,
    paddingTop: 24,
  },
  android: {
    height: 36,
  },
});

const Header = ({ headerLeft, headerRight, children, wrapStyle }) => {
  return (
    <View style={[styles.header, IS_ANDROID ? styles.android : styles.ios, wrapStyle]}>
      {headerLeft}
      {children}
      {headerRight}
    </View>
  );
};

export default Header;