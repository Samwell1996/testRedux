import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import T from 'prop-types';
import notFound from '../../../assets/not-found.png';
import { s } from './styles';
import colors from '../../../styles/colors';
import screens from '../../../navigation/screens';
import NavigationServices from '../../../services/NavigationServices';

function ProductItem({ item }) {
  let image = 'wrong';
  if (item.photos && item.photos.length) {
    image = item.photos[0] || item.photos[1] || item.photos[2];
  }

  function onToggleSaved() {
    if (!item.saved) {
      item.addToSaved();
    } else {
      item.deleteSaved();
    }
  }
  return (
    <View style={s.containerItem}>
      {!!item.photos && item.photos.length > 0 ? (
        <TouchableOpacity
          onPress={() =>
            NavigationServices.navigate(screens.ProductView, {
              productId: item.id,
            })
          }
        >
          <View style={s.containerImage}>
            <Image source={{ uri: image }} style={s.image} />
            <Image
              source={notFound}
              style={[s.imageNotFound, s.imageAbsolute]}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            NavigationServices.navigate(screens.ProductView, {
              productId: item.id,
            })
          }
        >
          <View>
            <Image source={notFound} style={s.imageNotFound} />
          </View>
        </TouchableOpacity>
      )}
      <View style={s.containerTitle}>
        <Text style={s.textTitle}>{item.title}</Text>
      </View>
      <View style={s.containerPrice}>
        <Text style={s.textPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity style={s.iconSave} onPress={onToggleSaved}>
        <Ionicons
          name="md-bookmark"
          size={25}
          color={item.saved ? colors.primary : colors.tabColorGrey}
        />
      </TouchableOpacity>
    </View>
  );
}
ProductItem.propTypes = {
  item: T.object,
};

export default observer(ProductItem);
