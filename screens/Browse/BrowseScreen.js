import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { FontAwesome } from '@expo/vector-icons';
import T from 'prop-types';
import { useStore } from '../../stores/createStore';
import ProductList from '../../components/ProductList/ProductList';
import Header from '../../components/Header/Header';
import Search from '../../components/Header/Search/Search';
import { s } from './styles';
import gStyles from '../../styles/styles';
import colors from '../../styles/colors';
import ListFooter from '../../components/ProductList/ListFooter/ListFooter';
import SearchView from '../../components/Filters/SearchView/SearchView';

function BrowseScreen() {
  const store = useStore();

  const [search, setSearch] = useState('');

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);

  return (
    <View>
      <Header>
        <Search search={search} setSearch={setSearch} />
        {search.length === 0 && (
          <TouchableOpacity style={s.iconFilter}>
            <FontAwesome
              name="filter"
              size={25}
              color={colors.primary}
            />
          </TouchableOpacity>
        )}
      </Header>
      {!!search.length && (
        <SearchView
          items={store.latestProducts.search(search)}
          setSearch={setSearch}
        />
      )}
      <ProductList
        store={store.latestProducts}
        onRefresh={() => store.latestProducts.fetchLatest.run()}
        refreshing={store.latestProducts.fetchLatest.isLoading}
        ListFooterComponent={() => (
          <ListFooter fetch={store.latestProducts.fetchMore} />
        )}
        onEndReached={() => store.latestProducts.fetchMore.run()}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
}

BrowseScreen.navigationOptions = () => ({
  headerStyle: gStyles.header,
  header: null,
});

BrowseScreen.propTypes = {};

export default observer(BrowseScreen);
