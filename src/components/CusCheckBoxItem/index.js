import React from 'react';
import { CheckBox } from 'ky-mobile-ui';

export default (props) => {
  return (
    <CheckBox.CheckBoxItem
      activeStyle={{
        backgroundColor: '#52B859',
        borderColor: '#52B859',
      }}
      hasBorder={false}
      fontSize={14}
      {...props}
    />
  );
};