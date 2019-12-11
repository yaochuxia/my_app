import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './models';
import JPush from './components/JPush';
import {Navigation} from './nav';

export default () => {
  let [theme] = React.useState('light');
  return (
    <Provider store={store}>
      <View style={styles.warpper}>
        <StatusBar barStyle="dark-content" />
        <JPush>
          <Navigation theme={theme} />
        </JPush>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  warpper: {
    flex: 1,
  },
});
