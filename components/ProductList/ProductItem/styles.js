import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const s = StyleSheet.create({
  containerItem: {
    width: '47.75%',
    marginTop: 8,
    marginHorizontal: 4,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColorGrey,
    borderRadius: 8,
  },
  containerImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 148,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 2,
  },
  imageNotFound: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    height: 148,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    zIndex: 1,
  },
  containerTitle: {
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  textTitle: {
    fontSize: 14,
    color: colors.textColors,
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.textColors,
  },
  containerPrice: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  iconSave: {
    position: 'absolute',
    right: 14,
    bottom: 12,
  },
  imageAbsolute: {
    position: 'absolute',
  },
});
