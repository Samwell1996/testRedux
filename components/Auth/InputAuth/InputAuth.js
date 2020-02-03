import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import T from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { s } from './styles';

function InputAuth({ error, name, onBlur, onFocus, ...props }) {
  const [isFocus, setIsFocus] = useState(false);

  function _onFocus(e) {
    setIsFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }
  function _onBlur(e) {
    setIsFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }
  return (
    <View>
      <View
        style={[s.default, isFocus && s.focused, error && s.error]}
      >
        <View style={s.labelContent}>
          <Text style={error ? s.labelError : s.label}>{name}</Text>
          <View
            style={[
              s.borderDefault,
              isFocus && s.borderFocus,
              error && s.borderFocus,
            ]}
          />
        </View>
        <TextInput onBlur={_onBlur} onFocus={_onFocus} {...props} />
      </View>
      {!!error && (
        <View>
          <Text style={isFocus ? s.textError : s.textErrorGrey}>
            {error}
          </Text>
          <MaterialIcons style={s.icon} name="error" size={25} />
        </View>
      )}
    </View>
  );
}

InputAuth.propTypes = {
  name: T.string,
  error: T.string,
  onBlur: T.func,
  onFocus: T.bool,
};

export default InputAuth;
