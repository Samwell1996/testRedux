import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import Header from '../../components/Header/Header';
import Search from '../../components/Header/Search/Search';
import { useStore } from '../../stores/createStore';
import ProductList from '../../components/ProductList/ProductList';
import SearchView from '../../components/Filters/SearchView/SearchView';
import { s } from './styles';

function SavedScreen() {
  const store = useStore();

  const [search, setSearch] = useState('');

  useEffect(() => {
    store.savedProducts.fetchSaved.run();
  }, []);

  return (
    <View>
      <Header>
        <Search search={search} setSearch={setSearch} />
      </Header>
      {!!search.length && (
        <SearchView
          items={store.savedProducts.search(search)}
          setSearch={setSearch}
        />
      )}
      <ProductList
        onRefresh={() => store.savedProducts.fetchSaved.run()}
        refreshing={store.savedProducts.fetchSaved.isLoading}
        store={store.savedProducts}
      />
    </View>
  );
}

SavedScreen.navigationOptions = () => ({
  header: null,
});

SavedScreen.propTypes = {};

export default observer(SavedScreen);
