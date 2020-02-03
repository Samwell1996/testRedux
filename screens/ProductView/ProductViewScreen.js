import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Linking } from 'expo';
import { connect } from 'react-redux';
import ViewMoreText from 'react-native-view-more-text';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import T from 'prop-types';
import { NavigationService } from '../../services';
import ItemPhotos from '../../components/ProductView/ItemPhotos/ItemPhotos';
import notFound from '../../assets/image-not-found.jpg';
import sliceGreen from '../../assets/sliceGreen.png';
import sliceBlue from '../../assets/sliceBlue.png';
import { s } from './styles';
import gStyles from '../../styles/styles';
import colors from '../../styles/colors';
import LoadingComponent from '../../components/ProductView/LoadingComponent/LoadingComponent';
import screens from '../../navigation/screens';
import {
  productsOperations,
  productSelector,
} from '../../modules/products';

function ProductViewScreen({ navigation, fetchProductId }) {
  const [slider, setSlider] = useState(0);
  const productId = navigation.getParam('productId');
  // const product = collection.get(productId);
  // const user = usersCollection.get(product.ownerId) || {};
  // const description =
  //   product.description || 'Product have no description';
  // const isViewer = product.ownerId === viewer.user.id;

  console.log('productId', productId);
  useEffect(() => {
    fetchProductId(productId);
  }, []);
  // console.log('productId', fetchProductId(productId));
  function openPhone() {
    Linking.openURL(`tel:`);
  }
  function renderReadMore(onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={s.readMore}>Read more...</Text>
      </TouchableOpacity>
    );
  }
  function renderShowLess(onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={s.readMore}>Show less</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={s.container}>
      <LinearGradient
        colors={[colors.shadow, colors.colorNone]}
        style={s.shadow}
      >
        <TouchableOpacity
          onPress={() => NavigationService.onGoBack()}
        >
          <Ionicons name="ios-arrow-back" size={30} style={s.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="share" size={30} style={s.icon} />
        </TouchableOpacity>
      </LinearGradient>
      {/* <ScrollView style={s.containerBetween}>
        <View style={s.containerPhotos}>
          {product.photos && product.photos.length > 0 ? (
            <Carousel
              data={product.photos}
              renderItem={({ item, index }) => (
                <ItemPhotos item={item} index={index} />
              )}
              sliderWidth={500}
              itemWidth={500}
              onSnapToItem={(index) => setSlider(index)}
            />
          ) : (
            <Image source={notFound} style={s.photosNotFound} />
          )}
          <View style={s.circles}>
            <Pagination
              dotsLength={product.photos && product.photos.length}
              activeDotIndex={slider}
              dotStyle={s.whiteCircles}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
          <Text style={s.date}>{product.date()}</Text>
          <Text style={s.title}>{product.title}</Text>
          <Text style={s.price}>${product.price}</Text>
        </View>
        <View style={s.containerLocation}>
          <MaterialIcons
            name="location-on"
            size={20}
            style={s.iconLocation}
          />
          <Text style={s.textLocation}>{product.location}</Text>
        </View>
        <View style={s.bottomContainer}>
          <ViewMoreText
            numberOfLines={2}
            renderViewMore={renderReadMore}
            renderViewLess={renderShowLess}
            textStyle={s.description}
          >
            <Text style={s.description}>{description}</Text>
          </ViewMoreText>
        </View>
        <View style={s.containerLine}>
          <View style={s.line} />
        </View>
        <View style={s.containerBottom}>
          <LoadingComponent
            fetch={store.entities.users.fetchUserById.isLoading}
          />
          <View style={s.containerAvatar}>
            <Text style={s.textAvatar}>{user.initials}</Text>
          </View>
          <View>
            <Text style={s.textFullName}>{user.fullName}</Text>
            <TouchableOpacity
              onPress={() =>
                NavigationService.navigate(screens.UserProducts, {
                  ownerId: product.ownerId,
                })
              }
            >
              <Text style={s.textPosts}>
                See all {user.firstName}’s posts
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView> */}
      {/* {!isViewer && (
        <View style={s.containerPhoneMessage}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={s.phone}
            onPress={openPhone}
          >
            <View style={s.containerForPhone}>
              <View style={s.containerPhone}>
                <FontAwesome
                  name="phone"
                  size={20}
                  style={s.iconBottom}
                />
                <Text style={s.textCall}>Call</Text>
              </View>
            </View>
            <Image
              source={sliceGreen}
              style={s.imageComponentGreen}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={s.message}
            onPress={() =>
              NavigationService.navigate(screens.Chat, {
                ownerId: product.ownerId,
                productId: product.id,
                chatId: product.chatId,
              })
            }
          >
            <View style={s.containerForMessage}>
              <View style={s.containerMessage}>
                <MaterialIcons
                  name="message"
                  size={20}
                  style={s.iconBottom}
                />
                <Text style={s.textCall}>Message</Text>
              </View>
            </View>
            <Image source={sliceBlue} style={s.imageComponentBlue} />
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
}

ProductViewScreen.navigationOptions = () => ({
  header: null,
  headerStyle: gStyles.header,
});

ProductViewScreen.propTypes = {
  navigation: T.object,
  fetchProductId: T.func,
};

const mapStateToProps = (state, productId) => ({

    product: state.entities.products(productId),
    // owner: productSelector.getProductOwner(state,),
    isLoading: state.products.getByProductId.isLoading,

});

const mapDispatchToProps = {
  fetchProductId: productsOperations.fetchProductId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductViewScreen);
