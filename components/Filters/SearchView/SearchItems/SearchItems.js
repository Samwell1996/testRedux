import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import T from 'prop-types';
import { observer } from 'mobx-react';
import { Entypo } from '@expo/vector-icons';
import { useStore } from '../../../../stores/createStore';
import { s } from './styles';
import colors from '../../../../styles/colors';

function SearchItems({ item, setSearch }) {
  const store = useStore();

  function onPress() {
    setSearch('');
    store.savedProducts.search(item.title);
  }

  return (
    <TouchableOpacity onPress={onPress} style={s.containerItem}>
      <View>
        <View style={s.itemTitle}>
          <Text style={s.textColors}>{item.title}</Text>
        </View>
        <View style={s.icon}>
          <Entypo
            name="chevron-right"
            size={30}
            color={colors.borderColorGrey}
          />
        </View>
        <View style={s.line} />
      </View>
    </TouchableOpacity>
  );
}
SearchItems.propTypes = {
  item: T.object,
  setSearch: T.func,
};

export default observer(SearchItems);
