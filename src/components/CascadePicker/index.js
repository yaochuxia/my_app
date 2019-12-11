import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCC',
    height: 38,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#56B659',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  headerArrow: {
    padding: 3,
    fontSize: 12,
    color: '#B2B2B2',
  },
  scrollBox: {
    flex: 1,
    flexDirection: 'row',
  },
  scroll: {

  },
  cascadeItem: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    backgroundColor: '#EEEEEE',
    borderLeftWidth: 4,
    borderColor: '#EEEEEE',
  },
  activeItem: {
    backgroundColor: '#FFF',
    borderColor: '#56B659',
  },
  cascadeItemText: {
    color: '#454545',
    fontSize: 14,
  },
  activeText: {
    color: '#56B659',
  },
  itemFlex: {
    flex: 1,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#EEE',
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCC',
  },
});

const Header = ({ value, onPress }) => {
  const length = value.length;
  return (
    <View style={styles.headerContainer}>
      {
        value.map((item, index) => {
          return (
            <View key={index} style={styles.headerItem}>
              <TouchableOpacity onPress={() => { onPress && onPress(index); }} >
                <Text style={styles.headerText}>{item.label}</Text>
              </TouchableOpacity>
              {index < length - 1 ? <Text style={styles.headerArrow}>{'＞'}</Text> : null}
            </View>
          );
        })
      }
    </View>
  );
};

Header.propTypes = {
  value: PropTypes.array.isRequired,
  onPress: PropTypes.func,
};

export default class CascadePicker extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.value,
      filterData: null,
    };
    this._renderData = [];
    this.initialScrollIndex = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  _renderItem = ({ item, index }, value, isLeftMenu, onPress) => {
    const active = value === item.id;
    return (
      <TouchableWithoutFeedback onPress={() => { onPress && onPress(item, index); }}>
        <View style={[styles.cascadeItem, isLeftMenu && styles.menuItem, active && styles.activeItem]}>
          <Text style={[styles.cascadeItemText, active && styles.activeText]}>{item.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _getItemLayout = (data, index) => {
    return { length: 37, offset: 37 * index, index };
  }

  _getSelectedItems = () => {
    const { data } = this.props;
    const { value, filterData } = this.state;
    const _data = filterData || data;
    this._renderData = [];
    if (_data && _data.length > 0) {
      let selItems = [];
      const length = value.length;
      this._renderData = [_data];
      this._getItem(selItems, _data, value, length, 0);
      if (this._renderData.length === 1 && _data.children && _data.children.length > 0) this._renderData.push(_data.children);
      return selItems;
    }
    return [];
  }

  _getItem = (selItems, data, value, length, index) => {
    if (index >= length) return selItems;
    const selItem = data.filter((it) => it.id === value[index])[0];
    if (selItem) {
      const { children, ...others } = selItem;
      selItems.push({ ...others });
      if (children) {
        this._renderData.push(children);
        this._getItem(selItems, children, value, length, index + 1);
      }
    }
    return selItems;
  }

  _onPressHeader = (index) => {
    const { value } = this.state;
    const { onSelect } = this.props;
    let _value = value.slice(0, index + 1);
    if (value.toString() !== _value.toString()) {
      this.setState({ value: _value }, () => {
        onSelect(_value, this._getSelectedItems());
      });
    }
  }

  _onSearch = () => {
    // if (text && text.trim()) {
    //   this.timer = setTimeout(() => {
    //     const _ = this._filter(text.trim());
    //     this.setState({ filterData: _ });
    //   }, 400);
    // } else if (this.state.filterData) {
    //   this.setState({ filterData: null });
    // }
  }

  _filter = (keyword) => {
    const { data } = this.props;
    const cache = this._callSelf(JSON.parse(JSON.stringify(data)), keyword);
    return cache;
  }

  _callSelf = (data, keyword) => {
    return data.filter((it) => {
      if (it.label.indexOf(keyword) !== -1) return true;
      else if (it.children) {
        const _ = this._callSelf(it.children, keyword);
        if (_ && _.length > 0) {
          it.children = _;
          return true;
        }
        return false;
      }
      return false;
    });
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const { containerStyle, onSelect, initialNumToRender } = this.props;
    const { value } = this.state;
    const selItems = this._getSelectedItems();
    const dataLength = this._renderData.length;

    return (
      <View style={[styles.container, containerStyle]}>
        <View>
          <TextInput
            maxLength={10}
            placeholder="请输入关键字搜索"
            clearButtonMode='while-editing'
            style={styles.input}
            onChangeText={this._onSearch}
            value={this.state.text}
          />
        </View>
        <View style={styles.seperator} />
        <Header value={selItems} onPress={this._onPressHeader} />
        <View style={styles.scrollBox}>
          {
            this._renderData.map((_item, index) => {
              let flex = 1;
              const menuIndex = dataLength - 2;
              if (dataLength > 1) {
                if (index < menuIndex) return null;
                flex = index === menuIndex ? 1 : 2;
              }
              return (
                <View
                  style={{ flex: flex }}
                  key={index}
                >
                  <ScrollView>
                    <FlatList
                      initialNumToRender={initialNumToRender}
                      ref={(scroll) => { this[`scroll${index}`] = scroll; }}
                      style={[styles.itemFlex]}
                      getItemLayout={this._getItemLayout}
                      keyExtractor={(item) => item.id}
                      data={_item}
                      renderItem={(info) => {
                        return this._renderItem(info, value[index], flex === 1, (item) => {
                          let _value = value.slice(0, index);
                          _value.push(item.id);
                          this.setState({ value: _value }, () => {
                            onSelect(_value, this._getSelectedItems());
                          });
                        });
                      }}
                    />
                  </ScrollView>
                </View>
              );
            })
          }
          {
            (this._renderData.length < 2) && <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#5C5C5C' }}>没有可选数据哟</Text></View>
          }
        </View>
      </View>
    );
  }
}

CascadePicker.propTypes = {
  containerStyle: PropTypes.object,
  onSelect: PropTypes.func,
  data: PropTypes.array,
  value: PropTypes.array,
  initialNumToRender: PropTypes.number,
};

CascadePicker.defaultProps = {
  onSelect: () => null,
  data: [],
  value: [],
  initialNumToRender: 14,
};