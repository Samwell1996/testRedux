import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {
  Ionicons,
  Feather,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';
import { observer } from 'mobx-react';
import T from 'prop-types';
import { useFormik } from 'formik';
import ActionSheet from 'react-native-actionsheet';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { useStore } from '../../stores/createStore';
import NavigationService from '../../services/NavigationServices';
import screens from '../../navigation/screens';
import Api from '../../Api';
import { s } from './styles';
import colors from '../../styles/colors';

function CreatePostScreen({ navigation }) {
  const store = useStore();
  const actionRef = useRef();
  const [isSwitch, setIsSwitch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  async function onSubmit({
    title,
    description,
    photos,
    price,
    location,
  }) {
    await store.ownProducts.createProduct.run({
      title,
      description,
      photos,
      price,
      location,
    });
  }
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: '',
      photos: [],
      description: '',
      price: '' || '0',
      location: '',
    },
    onSubmit,
    validateOnBlur: true,
  });
  useEffect(() => {
    navigation.setParams({ handleSubmit });
  }, []);

  async function onOpenCamera() {
    try {
      await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
      );
      const answer = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (answer.cancelled === false) {
        uploadPhotos(answer.uri);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function onOpenGallery() {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const answer = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (answer.cancelled === false) {
        uploadPhotos(answer.uri);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function uploadPhotos(url) {
    try {
      const response = await Api.Products.uploadPhotos(url);
      setFieldValue('photos', [...values.photos, response.data]);
    } catch (err) {
      console.log('error', err);
    }
  }

  function onChoose(index) {
    if (index === 0) {
      onOpenCamera();
      return;
    }
    if (index === 1) {
      onOpenGallery();
    }
  }

  function onOpenActionSheet() {
    actionRef.current.show();
  }
  return (
    <ScrollView style={s.container}>
      <View>
        <Text style={s.textInfo}>key information</Text>
        <TextInput
          style={s.inputTitle}
          placeholder="Title"
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          value={values.title}
          error={touched.title ? errors.title : ''}
        />
        <TextInput
          multiline
          style={s.InputDesc}
          placeholder="Description"
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          value={values.description}
          error={touched.description ? errors.description : ''}
        />
      </View>
      <View>
        <Text style={s.text}>photos</Text>
        <View>
          <View style={s.containerPhotos}>
            <TouchableOpacity
              style={s.photosButton}
              onPress={onOpenActionSheet}
            >
              <Feather name="plus" size={25} style={s.iconPlus} />
            </TouchableOpacity>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces={false}
            >
              {!!values.photos.length &&
                values.photos.map((photo) => (
                  <View key={photo}>
                    <Image source={{ uri: photo }} style={s.photos} />
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <KeyboardAvoidingView
        keyBoardVerticalOffset={0}
        behavior="padding"
      >
        <Text style={s.text}>price</Text>
        <View style={s.containerPriceButton}>
          <View style={s.containerButton}>
            <TouchableOpacity
              style={[s.priceButton, isSwitch && s.ButtonFocus]}
              onPress={() => setIsSwitch(true)}
            >
              <Text
                style={[s.textPrice, isSwitch && s.textPriceFocus]}
              >
                Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[s.freeButton, !isSwitch && s.ButtonFocus]}
              onPress={() => setIsSwitch(false)}
            >
              <Text
                style={[s.textPrice, !isSwitch && s.textPriceFocus]}
              >
                Free
              </Text>
            </TouchableOpacity>
          </View>
          {isSwitch && (
            <View>
              <View style={s.line} />
              <TextInput
                keyboardType="number-pad"
                autoCompleteType="cc-number"
                placeholder="Enter price..."
                style={s.inputTitle}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                error={touched.price ? errors.price : ''}
              />
              <TouchableOpacity style={s.textUahContainer}>
                <Text style={s.textPriceLocation}>uah</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text style={s.text}>location</Text>
        <View style={s.bottomContainer}>
          <TouchableOpacity
            style={s.touchableButton}
            onPress={() =>
              NavigationService.navigate(screens.Location, {
                setLocation: handleChange('location'),
              })
            }
          >
            <View style={s.locationIconContainer}>
              <MaterialIcons
                name="location-on"
                size={30}
                color={colors.primary}
              />
              <Text style={s.textPriceLocation}>
                {values.location || 'Location'}
              </Text>
            </View>
            <Entypo
              name="chevron-right"
              size={35}
              style={s.iconChevron}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <ActionSheet
        ref={actionRef}
        title={
          <Text style={s.textModal}>Which one do you like?</Text>
        }
        options={['Camera', 'Gallery', 'Cancel']}
        cancelButtonIndex={2}
        tintColor={colors.primary}
        onPress={onChoose}
      />
    </ScrollView>
  );
}

CreatePostScreen.navigationOptions = ({ navigation }) => ({
  title: 'New Post',
  headerLeft: (
    <TouchableOpacity onPress={() => NavigationService.onGoBack()}>
      <Ionicons name="ios-close" size={40} style={s.icon} />
    </TouchableOpacity>
  ),
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        const handleSubmit = navigation.getParam('handleSubmit');
        handleSubmit();
      }}
    >
      <Text style={s.textHeader}>Post</Text>
    </TouchableOpacity>
  ),
  headerStyle: s.header,
});

CreatePostScreen.propTypes = {
  navigation: T.object,
};

export default observer(CreatePostScreen);
