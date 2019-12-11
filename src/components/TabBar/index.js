import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native';
import { Icon } from 'ky-mobile-ui';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    backgroundColor: '#F7F7F7',
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerScanOutter: {
    width: 70,
    height: 70,
    marginBottom: 35,
    backgroundColor: '#F7F7F7',
    position: 'absolute',
    top: -35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    transform: [{ rotateZ: '45deg' }],
    borderWidth: 1,
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderBottomColor: '#F7F7F7',
    borderRightColor: '#F7F7F7',
  },
  centerScanInner: {
    backgroundColor: '#51B859',
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotateZ: '-45deg' }],
  },
});

const TarBar = ({ navigation, getLabelText, renderIcon, activeTintColor, inactiveTintColor, jumpTo }) => {
  const { routes } = navigation.state;
  return (
    <View>
      <View style={styles.tabbar}>
        {
          routes && routes.map((route, index) => {
            const label = getLabelText({ route });
            const focused = index === navigation.state.index;
            const tintColor = focused ? activeTintColor : inactiveTintColor;
            return (
              <TouchableWithoutFeedback
                key={route.key}
                style={styles.tab}
                onPress={() => jumpTo(route.key)}
              >
                <View style={styles.tab}>
                  <View style={[route.key === 'Camera' ? styles.centerScanOutter : null]}>
                    <View style={[route.key === 'Camera' ? styles.centerScanInner : null]}>
                      {renderIcon({ route, index, focused, tintColor })}
                    </View>
                  </View>
                  <Text style={[{ fontSize: 10, paddingTop: 5, color: tintColor }, route.key === 'Camera' ? { marginTop: 25 } : null]}>{label}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })
        }
      </View>
      {
        Platform.OS === 'android' && (
          <View style={[styles.centerScanOutter, { left: (width - 70) / 2, zIndex: 999 }]}>
            <TouchableWithoutFeedback
              onPress={() => jumpTo('Camera')}
            >
              <View style={[styles.centerScanInner]}>
                <Icon type="material-community" name="barcode-scan" size={30} color={'#FFF'} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        )
      }
    </View>
  );
};

export default TarBar;