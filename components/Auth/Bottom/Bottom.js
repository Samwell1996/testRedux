import React, { memo } from 'react';
import T from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { s } from './styles';

function Bottom({
  onPressFirst,
  onPressSecond,
  textFirst,
  textSecond,
  textThird,
}) {
  return (
    <View style={s.bottomContainer}>
      <View style={s.textToRegisterContainer}>
        <TouchableOpacity
          style={s.textToRegister}
          onPress={onPressFirst}
        >
          <Text style={s.textFirstBottom}>{textFirst}</Text>
          <Text style={s.textSecondBottom}>{textSecond}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.textThirdBottomContainer}
          onPress={onPressSecond}
        >
          <Text style={s.textThirdBottom}>{textThird}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Bottom.propTypes = {
  onPressSecond: T.func,
  onPressFirst: T.func,
  textFirst: T.string,
  textSecond: T.string,
  textThird: T.string,
};

export default memo(Bottom);
