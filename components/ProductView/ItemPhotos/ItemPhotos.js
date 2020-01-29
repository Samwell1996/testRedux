import React from 'react';
import { View, Image } from 'react-native';
import T from 'prop-types';
import { observer } from 'mobx-react';
import notFound from '../../../assets/image-not-found.jpg';
import { s } from './styles';

function ItemPhotos({ item }) {
  return (
    <View>
      <Image source={{ uri: item }} style={s.photos} />
      <Image
        source={notFound}
        style={[s.photosNotFound, s.absoluteNotFound]}
      />
    </View>
  );
}

ItemPhotos.propTypes = {
  item: T.string,
};

export default observer(ItemPhotos);
