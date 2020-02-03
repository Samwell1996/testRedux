import React, { useEffect } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import HeaderUser from '../../components/Header/HeaderUser/HeaderUser';
import { useUsersCollection } from '../../stores/Users/UsersCollection';
import ProductList from '../../components/ProductList/ProductList';
import { useViewer } from '../../stores/ViewerStore';
import { useStore } from '../../stores/createStore';
import gStyles from '../../styles/styles';
import { s } from './styles';

function UserProductScreen({ navigation }) {
  const store = useStore();
  const ownerId = navigation.getParam('ownerId');
  const usersCollection = useUsersCollection();
  const user = usersCollection.get(ownerId) || {};
  const viewer = useViewer();
  const ownProducts = viewer.user.ownProducts;

  useEffect(() => {
    store.entities.users.fetchUserById.run(ownerId);
    ownProducts.fetchOwnProducts.run(ownerId);
  }, []);

  return (
    <View>
      <HeaderUser
        userInitials={user.initials}
        userFullName={user.fullName}
      />
      <View style={s.containerProducts}>
        <ProductList
          onRefresh={() => ownProducts.fetchOwnProducts.run(ownerId)}
          refreshing={ownProducts.fetchOwnProducts.isLoading}
          store={ownProducts}
          onItemPress={() => {}}
        />
      </View>
    </View>
  );
}

UserProductScreen.navigationOptions = () => ({
  header: null,
  headerStyle: gStyles.header,
});

UserProductScreen.propTypes = {
  navigation: T.object,
};

export default observer(UserProductScreen);
