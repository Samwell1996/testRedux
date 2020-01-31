import React, { useEffect, useState, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
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
import { latestProductsOperations } from '../../modules/latestProducts';

function BrowseScreen({ items, fetchLatest, isLoading }) {
  const store = useStore();

  const [search, setSearch] = useState('');
  useEffect(() => {
    // store.latestProducts.fetchLatest.run();
    fetchLatest();
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
          // items={store.latestProducts.search(search)}
          setSearch={setSearch}
        />
      )}
      <ProductList
        store={items}
        onRefresh={() => fetchLatest()}
        refreshing={isLoading}
        // ListFooterComponent={() => (
        //   <ListFooter fetch={store.latestProducts.fetchMore} />
        // )}
        // onEndReached={() => store.latestProducts.fetchMore.run()}
        // onEndReachedThreshold={0.3}
      />
    </View>
  );
}

BrowseScreen.navigationOptions = () => ({
  headerStyle: gStyles.header,
  header: null,
});

BrowseScreen.propTypes = {
  isLoading: T.func,
  items: T.array,
  fetchLatest: T.func,
};

function mapStateToProps(state) {
  return {
    items: state.latestProducts.latestProducts.items,
    isLoading: state.latestProducts.latestProducts.isLoading,
  };
}

const mapDispatchToProps = {
  fetchLatest: latestProductsOperations.fetchLatestProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(BrowseScreen));

// export default memo(BrowseScreen);
