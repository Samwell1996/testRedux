import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  containerPhotos: {
    overflow: 'hidden',
    height: 356,
  },
  photos: {
    position: 'absolute',
    height: 356,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 2,
  },
  photosNotFound: {
    // alignItems: 'center',
    height: 356,
    width: '85%',
    zIndex: 1,
  },
  absoluteNotFound: {
    position: 'absolute',
  },
});
