import React from 'react';
import { View, Platform } from 'react-native';
import T from 'prop-types';
import { s } from './styles';

const isAndroid = Platform.OS === 'android';

function Header({ children }) {
  return (
    <View
      style={[
        s.containerHeader,
        isAndroid ? s.paddingAndroid : s.paddingIphone,
      ]}
    >
      {children}
    </View>
  );
}
Header.propTypes = {
  children: T.node,
};

export default Header;
