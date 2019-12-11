import React from 'react';
import { View } from 'react-native';
import { Popover } from 'ky-mobile-rn-pro';
import PropTypes from 'prop-types';
import { Icon } from 'ky-mobile-ui';

const PopItem = Popover.PopItem;

const defalutIcon = (
  <View style={{
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Icon type="ionicon" name="md-add" color='#FFF' />
  </View>
);

const PopoverMenus = ({ title, onClickScan, onClickPersonal, onClickShare }) => {
  return (
    <Popover title={title} >
      <PopItem
        hasBorderBottom
        onPress={onClickScan}
        label="扫描二维码"
        style={{ paddingTop: 0 }}
        icon={<Icon name="camera" type="evilicon" size={30} />}
      />
      <PopItem
        hasBorderBottom
        onPress={onClickPersonal}
        label="个人中心"
        icon={<Icon name="user" type="evilicon" size={30} color="#4CB954" />}
      />
      <PopItem
        onPress={onClickShare}
        label="分享"
        style={{ paddingBottom: 0 }}
        icon={<Icon name="link" type="evilicon" size={30} />}
      />
    </Popover>
  );
};

PopoverMenus.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClickScan: PropTypes.func,
  onClickPersonal: PropTypes.func,
  onClickShare: PropTypes.func,
};

PopoverMenus.defaultProps = {
  title: defalutIcon,
  onClickScan: () => null,
  onClickPersonal: () => null,
  onClickShare: () => null,
};

export default PopoverMenus;