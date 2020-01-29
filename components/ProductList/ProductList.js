import React from 'react';
import { FlatList, View } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import { s } from './styles';
import ProductItem from './ProductItem/ProductItem';

function ProductList({ navigation, style, store, ...props }) {
  return (
    <View style={s.container}>
      <FlatList
        contentContainerStyle={s.list}
        data={store.items.slice()}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem item={item} rootProps={props} />
        )}
        {...props}
      />
    </View>
  );
}
ProductList.propTypes = {
  style: T.object,
  store: T.object,
  navigation: T.object,
};

export default observer(ProductList);
