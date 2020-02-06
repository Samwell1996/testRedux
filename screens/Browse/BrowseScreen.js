import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import T from 'prop-types';
import ProductList from '../../components/ProductList/ProductList';
import Header from '../../components/Header/Header';
import Search from '../../components/Header/Search/Search';
import { s } from './styles';
import gStyles from '../../styles/styles';
import colors from '../../styles/colors';
import ListFooter from '../../components/ProductList/ListFooter/ListFooter';
import SearchView from '../../components/Filters/SearchView/SearchView';
import {
  productsOperations,
  productSelector,
} from '../../modules/products';

function BrowseScreen({
  items,
  fetchLatest,
  isLoading,
  fetchMoreLatest,
}) {
  const [search, setSearch] = useState('');
  useEffect(() => {
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
        <SearchView items={items} setSearch={setSearch} />
      )}
      <ProductList
        store={items}
        onRefresh={() => fetchLatest()}
        refreshing={isLoading}
        // ListFooterComponent={() => <ListFooter fetch={items} />}
        // onEndReached={() => fetchMoreLatest()}
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
  fetchMoreLatest: T.func,
};

function mapStateToProps(state) {
  return {
    items: productSelector.getLatest(state),
    isLoading: state.products.latestProducts.isLoading,
  };
}

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatestProducts,
  fetchMore: productsOperations.fetchMoreLatest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrowseScreen);
