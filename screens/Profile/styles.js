import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: '100%',
  },
  containerHeader: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.tabColorGrey,
    paddingTop: 42,
    paddingBottom: 8,
  },
  containerAvatar: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 72,
    height: 72,
  },
  textAvatar: {
    fontSize: 22,
    paddingHorizontal: 18,
    paddingVertical: 22,
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  textFullName: {
    paddingVertical: 10,
    fontSize: 18,
    color: colors.textColors,
  },
  containerTextInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInfoFirst: {
    color: colors.textColors,
    fontSize: 16,
  },
  textInfoSecond: {
    color: colors.textColors,
    fontSize: 18,
    fontWeight: 'bold',
  },
  lineVertical: {
    width: 1,
    height: 12,
    backgroundColor: colors.tabColorGrey,
    marginHorizontal: 8,
  },
  openSetting: {
    position: 'absolute',
    right: 16,
    top: 42,
  },
  containerContent: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNoItems: {
    fontSize: 18,
    color: colors.tabColorGrey,
    marginVertical: 16,
  },
  containerProducts: {
    height: '70%',
    width: '100%',
  },
});
