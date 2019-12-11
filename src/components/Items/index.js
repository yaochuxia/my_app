import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemWrap: {
    paddingBottom: 10,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: '#686868',
  },
  rightStyle: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  hasContent: {
    marginLeft: 5,
  },
  flex: {
    flex: 1,
  },
  paddingTop: {
    paddingTop: 10,
  },
});

const Items = ({ wrapStyle, itemLeft, title, content, extra, description, actions }) => {
  // title部分
  const _title = title ? (React.isValidElement(title) ? <View style={styles.paddingTop}>{title}</View> : <View style={styles.paddingTop}><Text style={styles.text}>{title}</Text></View>) : null;
  // content 和 extra
  const _contents = (content || extra) ?
    (
      <View style={[styles.content, styles.paddingTop]}>
        {React.isValidElement(content) ? <View style={[styles.flex]}>{content}</View> : <View style={styles.flex}><Text style={styles.text}>{content}</Text></View>}
        {
          React.isValidElement(extra) ?
            <View style={[styles.flex, content ? styles.hasContent : null]}>{extra}</View>
            : (
              extra ? <View style={[styles.flex, content ? styles.hasContent : null]}><Text style={styles.text}>{extra}</Text></View>
                : null
            )
        }
      </View>
    ) : null;
  // description
  const _desc = description ? (
    <View style={styles.description}>
      {React.isValidElement(description) ? <View style={[styles.paddingTop, styles.flex]}>{description}</View> : <View style={[styles.paddingTop, styles.flex]}><Text style={styles.text}>{description}</Text></View>}
    </View>
  ) : null;
  // actions
  const _actions = actions ? (
    < View style={styles.actions} >
      {React.isValidElement(actions) ? <View style={[styles.paddingTop, styles.flex]}>{actions}</View> : <View style={[styles.paddingTop, styles.flex]}><Text style={styles.text}>{actions}</Text></View>}
    </View >
  ) : null;

  return (
    <View style={[styles.itemWrap, wrapStyle]}>
      <View style={[styles.item]}>
        {itemLeft ? (React.isValidElement(itemLeft) ? itemLeft : <Text style={styles.text}>{itemLeft}</Text>) : null}
        <View style={[styles.rightStyle]}>
          {_title}
          {_contents}
          {_desc}
        </View>
      </View>
      {_actions}
    </View>
  );
};

Items.propTypes = {
  wrapStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Items.defaultProps = {

};

export default Items;