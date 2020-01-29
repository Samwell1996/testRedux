import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  containerChat: {
    backgroundColor: colors.white,
    height: 82,
    zIndex: 3,
  },
  containerAvatars: {
    position: 'absolute',
    marginVertical: 17,
    marginHorizontal: 8,
  },
  productAvatarContainer: {
    height: 48,
    width: 48,
    borderRadius: 50,
    zIndex: 5,
  },
  notFound: {
    position: 'absolute',
    zIndex: 3,
    height: 48,
    width: 48,
    borderRadius: 50,
  },
  AvatarProduct: {
    zIndex: 5,
    height: 48,
    width: 48,
    borderRadius: 50,
  },
  ownerAvatarContainer: {
    zIndex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    left: 28,
  },
  ownerAvatarText: {
    color: colors.white,
    fontSize: 8,
    textTransform: 'uppercase',
  },
  infoContainerText: {
    marginLeft: 64,
  },
  textProductName: {
    color: colors.textColors,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    marginRight: 70,
  },
  textOwnerName: {
    color: colors.textBlue,
    fontSize: 14,
    marginRight: 70,
  },
  dateContainer: {
    position: 'absolute',
    right: 0,
    marginRight: 8,
    marginTop: 10,
  },
  dateText: {
    color: colors.tabColorGrey,
  },
  line: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.borderColorGrey,
    height: 1,
    marginLeft: 64,
  },
  textMessage: {
    marginRight: 40,
  },
});
