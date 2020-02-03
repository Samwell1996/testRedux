import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const s = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
  },
  icon: {
    color: colors.tabColorGrey,
    paddingLeft: 16,
    paddingTop: 2,
  },
  containerUserInfo: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  loading: {
    position: 'absolute',
    left: -45,
    top: -10,
  },
  avatar: {
    backgroundColor: colors.primary,
    width: 36,
    height: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.white,
    textTransform: 'uppercase',
  },
  fullNameText: {
    marginTop: 8,
    marginLeft: 8,
  },
});
