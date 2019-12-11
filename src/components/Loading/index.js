import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'ky-mobile-ui';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <View style={styles.mask}>
      <ActivityIndicator isAnimating size="large" />
    </View>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};

export default Loading;