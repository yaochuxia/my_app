import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from '@ant-design/react-native'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  locationBtn:{
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Location =({iconType, iconName, iconSize, iconColor, onPress })=>{
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.locationBtn}>
        <Icon type={iconType} name={iconName} size={iconSize} color={iconColor} />
      </View>
    </TouchableOpacity>
  )
}

Location.propTypes = {
  iconType: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  onPress: PropTypes.func,
};

Location.defaultProps = {
  iconType: 'material',
  iconName: 'location-on',
  iconColor: '#FFF',
  iconSize: 24,
  onPress: () => null,
};

export default Location;