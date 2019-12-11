import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window'); // 屏幕宽度
const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#FFFFFF',
  },
  contenrContailer: {
    height: '100%',
  },
  header: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  headerItem: {
    minHeight: 30,
    height: 40,
    backgroundColor: '#FAFAFA',
    borderColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataView: {
    flexGrow: 1,
  },
  dataViewContent: {},
  row: {
    flexDirection: 'row',
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  cell: {
    minHeight: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellStyle: {
    color: '#999999',
  },
  headerText: {
    color: '#999999',
  },
});

class Table extends Component {

  static defaultProps = {
    columns: [], //列
    dataSource: [], // 数据
    renderCell: undefined,
  }

  static propTypes = {
    height: PropTypes.number,
    renderCell: PropTypes.func,
  }

  // 渲染格
  _renderCell(cellData, col) {
    const { columns, columnWidth } = this.props;
    const windowsWidth = Dimensions.get('window').width; // 屏幕宽度
    const colWidth = columns.length > 0 ? windowsWidth / (columns.length) : 0;
    const style = { width: colWidth || columnWidth };
    return (
      <View key={col.dataIndex} style={[styles.cell, style]}>
        <Text style={styles.cellStyle}>{cellData}</Text>
      </View>
    );
  }

  // 渲染头部
  _renderHeader() {
    const { columns, columnWidth } = this.props;
    const windowsWidth = Dimensions.get('window').width; // 屏幕宽度
    const colWidth = columns.length > 0 ? windowsWidth / (columns.length) : 0;
    const style = { width: colWidth || columnWidth };
    return columns.map((col, index) => {
      return (
        <View key={index} style={[styles.headerItem, style]}>
          <Text style={styles.headerText}>{col.title}</Text>
        </View>
      );
    });
  }

  _renderRow(rowData, index) {
    let { columns, renderCell } = this.props;
    if (!renderCell) { renderCell = this._renderCell.bind(this, ); }

    return (
      <View key={index} style={styles.row}>
        {columns.map(col => renderCell(rowData[col.dataIndex], col))}
      </View>
    );
  }

  render() {
    const { dataSource, height } = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.contentContainer, { height }]}
        horizontal={false} // 横向
        bounces={false} //反弹
      >
        <View>
          <View style={styles.header}>
            {this._renderHeader()}
          </View>
          <ScrollView
            style={styles.dataView}
            contentContainerStyle={styles.dataViewContent}
          >
            {dataSource && dataSource.map((rowData, index) => this._renderRow(rowData, index))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default Table;