import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import authBackImg from '../../assets/signin/background-image.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  authBack: {
    width: width,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AuthBack = ({ children, style, imgUrl }) => {
  return (
    <ImageBackground style={[styles.authBack, style]} source={imgUrl || authBackImg} >
      {children}
    </ImageBackground>
  );
};

AuthBack.propTypes = {
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  url: PropTypes.func,
};

export default AuthBack;