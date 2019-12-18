import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Grid } from '@ant-design/react-native'
import Location from '../../components/Location';
import Menus from '../../components/Menus';

const styles = StyleSheet.create({
  card:{
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#76D275',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  }

})
export default class HomeView extends Component {
  render(){
    const Card = ({ children, style }) => {
      return <View style={[styles.card, style]}>{children}</View>;
    };
    return(
      <ScrollLayoutContainer hasTab={true} >
        <View style={{paddingHorizontal:10}}>
          <Card style={styles.cardBody}>
          <Menus
              onPress={this.onPressReceiveMenu}
              data={[
                { label: '收件', icon: <Icon type="feather" name="package" size={24} color="#FFF" />, params: { page: 0 } },
                { label: '已接单数', children: <Text style={styles.menuText}>0/0<Text style={styles.menuTextUnit}>(单)</Text></Text>, params: { page: 0 } },
                { label: '待打印', children: <Text style={styles.menuText}>0<Text style={styles.menuTextUnit}>(单)</Text></Text>, params: { page: 2 } },
                { label: '收件图', icon: <Icon type="material-community" name="google-maps" size={24} color="#FFF" />, onPress: () => null },
              ]}
            />

          </Card>
        </View>
      </ScrollLayoutContainer>
    )
  }
}
