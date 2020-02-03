import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  containerProduct: {
    height: 58,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    borderBottomColor: colors.borderColorGrey,
  },
  containerAvatars: {
    position: 'absolute',
    marginVertical: 13,
    marginHorizontal: 8,
  },
  productAvatarContainer: {
    height: 32,
    width: 32,
    borderRadius: 50,
  },
  notFound: {
    position: 'absolute',
    zIndex: 3,
    height: 32,
    width: 32,
    borderRadius: 50,
  },
  AvatarProduct: {
    zIndex: 5,
    height: 32,
    width: 32,
    borderRadius: 50,
  },
  containerList: {
    backgroundColor: colors.grey,
    flexDirection: 'column-reverse',
  },
  infoText: {
    marginRight: 75,
    marginVertical: 8,
    marginLeft: 48,
  },
  textTitle: {
    fontSize: 14,
    color: colors.textColors,
  },
  textDescription: {
    fontSize: 14,
    color: colors.tabColorGrey,
  },
  containerIcon: {
    position: 'absolute',
    right: 0,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  textNoMessages: {
    fontSize: 18,
    color: colors.tabColorGrey,
    marginVertical: 16,
  },
  containerHeader: {
    zIndex: 10,
  },
  containerNoMessages: {
    zIndex: 1,
    marginBottom: '33%',
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 4,
  },
  containerBottomChatScreen: {
    flex: 1,
    marginBottom: -130,
    justifyContent: 'flex-end',
    backgroundColor: colors.grey,
  },
  containerChatScreen: {
    justifyContent: 'flex-start',
    height: '100%',
  },
  containerSendMessage: {
    marginBottom: 130,
    borderTopWidth: 1,
    backgroundColor: colors.white,
    borderTopColor: colors.borderColorGrey,
    justifyContent: 'space-between',
  },
  containerTextInput: {
    paddingVertical: 8,
    paddingLeft: 8,
    marginRight: 56,
  },
  textInput: {
    fontSize: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.greyPhotos,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.borderColorGrey,
    borderRadius: 4,
  },
  messageIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 15,
  },
});
