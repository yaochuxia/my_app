import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Icon, TextAreaItem, List, WhiteSpace } from 'ky-mobile-ui';
const Item = List.Item;

const ButtonContent = [
  { lable: 'edit', value: '编辑', icon: <Icon name="edit" type="entypo" size={20} color="#60C265" /> },
  { lable: 'del', value: '删除', icon: <Icon name="delete-forever" type="material-community" size={20} color="#EF4949" /> },
];

const ContentWhiteSpace = () => {
  return <WhiteSpace size={9} style={{ position: 'relative', top: -1, borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#F3F3F3', backgroundColor: '#FAFAFA' }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textAreaStyle: {
    marginLeft: 0,
    height: 120,
    padding: 10,
    marginTop: -1,
    borderTopWidth: 1,
    overflow: 'hidden',
    borderColor: '#F3F3F3',
  },
  btnText: {
    fontSize: 14,
  },
  delBtnText: {
    color: '#EF4949',
  },
  editBtnText: {
    color: '#60C265',
  },
  btnBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#E4E4E4',
  },
  titleStyle: {
    color: '#333333',
    fontSize: 14,
  },
  extraStyle: {
    color: '#D0D0D0',
    borderTopWidth: 1,
    borderColor: '#E4E4E4',
    fontSize: 14,
    marginRight: -40,
  },
});

const SmsModel = ({ title, value, placeholder, isEditable, onClickTitle, onClickDel, onClickEdit, textAreaStyle, ...nextProps }) => {
  return (
    <View style={styles.container}>
      <Item
        arrow={!isEditable ? 'horizontal' : ''}
        extra={!isEditable && '请选择'}
        onClick={() => { onClickTitle(); }}
        isDisabled={!isEditable ? true : false}
        exra
      >
        <Text style={styles.titleStyle}>{`模板名称：${title}`}</Text>
      </Item>

      <TextAreaItem
        styles={[styles.textAreaStyle, isEditable && { height: 60 }]}
        style={[{ fontSize: 14, color: '#333333' }, textAreaStyle]}
        placeholder={placeholder}
        value={value}
        isEditable={isEditable}
        isAutoHeight={true}
        {...nextProps}
      />
      {isEditable &&
        <View style={{ flex: 2, flexDirection: 'row', height: 48 }}>
          {
            ButtonContent.map((item, index) => {
              return (
                <TouchableHighlight onPress={() => { item.lable === 'del' ? onClickDel() : onClickEdit(); }} key={index} style={{ flex: 1 }} activeOpacity={1} underlayColor="#F0F0F0">
                  <View style={[styles.btnBox, index === 0 ? { borderLeftWidth: 0 } : {}]}>
                    {item.icon}
                    < Text style={[styles.btnText, item.lable === 'del' ? styles.delBtnText : styles.editBtnText]}> {item.value}</Text>
                  </View>
                </TouchableHighlight>
              );
            })
          }
        </View>
      }
      <ContentWhiteSpace />
      <View>
      </View>
    </View >
  );
};

SmsModel.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isEditable: PropTypes.bool,
  onClickTitle: PropTypes.func,
  onClickDel: PropTypes.func,
  onClickEdit: PropTypes.func,
  textAreaStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};

SmsModel.defaultProps = {
  title: '',
  value: '',
  placeholder: '',
  isEditable: false,
  onClickTitle: () => { },
  onClickDel: () => { },
  onClickEdit: () => { },
};

export default SmsModel;
