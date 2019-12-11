import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import AuthBack from '../AuthBack';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  topContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  topCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  data: {
    justifyContent: 'center',
    height: 21,
    width: 98,
    borderRadius: 10.5,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#FFFFFF',
    overflow: 'hidden',
  },
  topCenterText: {
    fontSize: 14,
    paddingTop: 15,
    color: '#333333',
  },
  picBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 81,
    height: 81,
    marginLeft: 15,
    marginRight: 15,
    padding: 1.5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 40,
    overflow: 'hidden',
  },
  headerFilter: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 37.5,
    backgroundColor: '#FFFFFF',
  },
  headerStyle: {
    width: 76, height: 76, borderRadius: 38,
  },
});

const UserDisplay = ({ userName, jobnumbers, imgUrl, outletsNumber, address }) => {

  // 用户信息
  const information = [
    { name: '姓名 ：' },
    { label: imgUrl ? { uri: imgUrl } : require('../../assets/personal/header.png') },
    { name: '工号 ：' },
  ];
  return (
    <View style={styles.wrapper}>
      <AuthBack
        imgUrl={require('../../assets/personal/bg-img.png')}
        style={{ height: 266.5 }}
      >
        <View style={styles.topContent}>
          <View style={styles.topCenter}>
            {
              information.map((item, index) => {
                if (item.name) {
                  return <View key={index} style={styles.data}><Text style={styles.text}>{`${item.name}${item.name === '姓名 ：' ? userName : jobnumbers}`}</Text></View>;
                } else {
                  return <View key={index} style={styles.picBox}>
                    <View style={styles.headerFilter} >
                      {<Image source={item.label} style={styles.headerStyle} />}
                    </View>
                  </View>;
                }
              })
            }
            <View>
            </View>
          </View>
          <Text style={styles.topCenterText}> {`—— ${address} ——`}</Text>
          <Text style={styles.topCenterText}> {`网点编号： ${outletsNumber}`}</Text>
        </View>
      </AuthBack>
    </View>
  );
};

UserDisplay.propTypes = {
  jobnumbers: PropTypes.string,
  imgUrl: PropTypes.string,
  outletsNumber: PropTypes.string,
  address: PropTypes.string,
  userName: PropTypes.string,
};

UserDisplay.defaultProps = {
  userName: '',
  jobnumbers: '',
  address: '',
  outletsNumber: '',

};

export default UserDisplay;

