import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const styls = StyleSheet.create({
  menu: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    height: 30,
    justifyContent: 'center',
  },
  text: {
    paddingTop: 10,
    color: '#FFF',
  },
})

const Menu = ({label, children, icon, onPress, textStyle, index, params })=>{
  return(
    <TouchableOpacity onPress={() => { onPress && onPress(index, params); }} style={{ flex: 1 }}>
      <View style={styles.menu}>
        {icon && <View style={styles.icon}>{icon}</View>}
        {children && <View style={styles.icon}>{children}</View>}
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Menus = ({ data, onPress }) => {
  return data.map((it, index) => {
    return <Menu onPress={onPress} {...it} index={index} key={`menu-${index}`} />;
  });
};

Menus.propTypes = {
  data: PropTypes.array.isRequired,
  onPress: PropTypes.func,
};

Menu.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onPress: PropTypes.func,
  textStyle: PropTypes.any,
  params: PropTypes.object,
};

export default Menus;