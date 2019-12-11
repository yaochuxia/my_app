import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Grid } from 'ky-mobile-ui';
import Location from '../../components/Location';
import PopoverMenus from '../../components/PopoverMenus';
import Menus from '../../components/Menus';
import ScrollLayoutContainer from '../../components/ScrollLayoutContainer';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  homeContainer: {
    padding: 10,
    marginBottom: 35,
  },
  card: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#76D275',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  menuText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  menuTextUnit: {
    fontSize: 10,
    color: '#FFF',
  },
});

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default class HomeView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Location onPress={() => {
        navigation.navigate('MapView');
      }} />,
      headerRight: <PopoverMenus />,
      headerStyle: {
        backgroundColor: '#4CB954',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.timer = setTimeout(() => {
        this.setState({ refreshing: false });
      }, 2000);
    });
  };

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  onClickSignOut = () => {
    this.props.navigation.navigate('PersonalView');
  };

  onPressGridItem = (item, index) => {
    const { navigation } = this.props;
    switch (index) {
      case 0: navigation.navigate('TextingView'); break;
      case 1: navigation.navigate({ routeName: 'Qrcode' }); break;
      case 3: navigation.navigate({ routeName: 'Record' }); break;
      case 4: navigation.navigate({ routeName: 'Receivable' }); break;
      case 5: navigation.navigate({ routeName: 'Charts' }); break;
      case 6: navigation.navigate({ routeName: 'Toll' }); break;
      case 7: navigation.navigate({ routeName: 'Feedback' }); break;
      case 8: navigation.navigate({ routeName: 'Cascade' }); break;
    }
  }

  onPressReceiveMenu = (index, params) => {
    const { navigation } = this.props;
    navigation.navigate({ routeName: 'ReceiveView', params: params });
  }

  onPressSendMenu = (index, params) => {
    const { navigation } = this.props;
    navigation.navigate({ routeName: 'SendView', params: params });
  }

  render() {
    const { refreshing } = this.state;
    return (
      <ScrollLayoutContainer hasTab={true} onRefresh={this.onRefresh} refreshing={refreshing}>
        <View style={{ paddingHorizontal: 10 }}>
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
          <Card style={styles.cardBody}>
            <Menus
              onPress={this.onPressSendMenu}
              data={[
                { label: '派件', icon: <Icon type="font-awesome" name="send" size={24} color="#FFF" />, params: { page: 0 } },
                { label: '已签件数', children: <Text style={styles.menuText}>0/0<Text style={styles.menuTextUnit}>(单)</Text></Text>, params: { page: 1 } },
                { label: '问题件数', children: <Text style={styles.menuText}>0<Text style={styles.menuTextUnit}>(单)</Text></Text>, params: { page: 2 } },
                { label: '派件图', icon: <Icon type="material-community" name="google-maps" size={24} color="#FFF" />, onPress: () => null },
              ]}
            />
          </Card>
          <Grid
            columnNum={3}
            isHasLine={false}
            textStyle={{ color: '#2F2F2F', fontSize: 14 }}
            onClick={this.onPressGridItem}
            data={[
              { text: '群发短信', icon: <Icon type="zocial" name="email" size={24} color="#4CB954" /> },
              { text: '二维码下单', icon: <Icon type="font-awesome" name="qrcode" size={24} color="#ED595D" /> },
              { text: '短信记录', icon: <Icon type="material-community" name="message-bulleted" size={24} color="#43BF49" /> },
              { text: '录单', icon: <Icon type="material-community" name="notebook" size={24} color="#24A8D8" /> },
              { text: '收款', icon: <Icon type="entypo" name="wallet" size={24} color="#FA5257" /> },
              { text: '图表展示', icon: <Icon type="font-awesome" name="area-chart" size={24} color="#FBC22D" /> },
              { text: '收费查询', icon: <Icon type="material" name="attach-money" size={24} color="#FEC62F" /> },
              { text: '反馈', icon: <Icon type="foundation" name="lightbulb" size={24} color="#E6CC3E" /> },
              { text: '4段码查询', icon: <Icon type="material-community" name="numeric-4-box" size={24} color="#F0565A" /> },
            ]} />
        </View>
      </ScrollLayoutContainer>
    );
  }
}

