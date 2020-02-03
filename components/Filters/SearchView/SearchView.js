import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import T from 'prop-types';
import { observer } from 'mobx-react';
import SearchItems from './SearchItems/SearchItems';
import { s } from './styles';

function SearchView({ items, setSearch, ...props }) {
  return (
    <ScrollView style={s.container}>
      {!!items.length && (
        <View>
          <FlatList
            contentContainerStyle={s.list}
            data={items}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <SearchItems item={item} setSearch={setSearch} />
            )}
            ListFooterComponent={<View style={s.line} />}
            keyExtractor={(item) => item.id.toString()}
            {...props}
          />
        </View>
      )}
    </ScrollView>
  );
}

SearchView.propTypes = {
  items: T.array,
  setSearch: T.string,
};

export default observer(SearchView);
