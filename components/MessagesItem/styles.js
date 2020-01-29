import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  containerChat: {
    backgroundColor: colors.white,
    height: 82,
    zIndex: 3,
  },
  userContainer: {
    alignItems: 'flex-start',
  },
  ownerContainer: {
    alignItems: 'flex-end',
  },
  owner: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.borderColorGrey,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 46,
  },
  ownerText: {
    color: colors.white,
    fontSize: 16,
  },
  user: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColorGrey,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 46,
  },
  userText: {
    color: colors.textColors,
    fontSize: 16,
  },
  userDate: {
    color: colors.tabColorGrey,
    fontSize: 12,
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingRight: 8,
    paddingBottom: 6,
  },
  ownerDate: {
    color: colors.white,
    fontSize: 12,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'flex-end',
    paddingRight: 8,
    paddingBottom: 6,
  },
});
