import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import T from 'prop-types';
import { s } from './styles';
import ProductItem from './ProductItem/ProductItem';

function ProductList({ navigation, style, store, ...props }) {
  return (
    <View style={s.container}>
      <FlatList
        contentContainerStyle={s.list}
        data={store.slice()}
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
  store: T.array,
  navigation: T.object,
};

export default memo(ProductList);
