import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Keyboard, Platform, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

const IS_ANDROID = Platform.OS === 'android';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scroll: {
    marginBottom: 35,
  },
});

class ScrollLayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = (e) => {
    const { endCoordinates: { height } } = e;
    this.setState({ height: parseInt(height, 10) });
  }

  _keyboardDidHide = () => {
    this.setState({ height: 0 });
  }

  render() {
    const { children, hasTab, containerStyle, behavior, offset, refreshing, onRefresh, ...others } = this.props;
    const { height } = this.state;
    const _offset = !!offset; // offset 是否需要
    let _keyboardVerticalOffset = IS_ANDROID ? -height : 0; // Android兼容offset
    if (_offset && (typeof offset === 'number')) {
      _keyboardVerticalOffset = offset - _keyboardVerticalOffset;
    }

    return (
      <KeyboardAvoidingView
        enabled
        style={styles.flex}
        behavior={behavior}
        keyboardVerticalOffset={_keyboardVerticalOffset}
        {...others}
      >
        <ScrollView
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          )}
          style={[styles.container, containerStyle]}
          keyboardShouldPersistTaps="handled"
        >
          <View style={hasTab ? styles.scroll : null}>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

ScrollLayoutContainer.propTypes = {
  hasTab: PropTypes.bool,
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  behavior: PropTypes.oneOf(['height', 'position', 'padding']),
  containerStyle: PropTypes.object,
};

ScrollLayoutContainer.defaultProps = {
  offset: false,
  hasTab: false,
  refreshing: false,
  onRefresh: () => null,
  behavior: 'padding',
};

export default ScrollLayoutContainer;