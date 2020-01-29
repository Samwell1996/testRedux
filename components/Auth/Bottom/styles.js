import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const s = StyleSheet.create({
  bottomContainer: {
    height: 60,
    backgroundColor: colors.white,
    borderTopColor: colors.borderColorGrey,
    borderTopWidth: 1,
  },
  textToRegisterContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textToRegister: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 21,
    marginLeft: 8,
  },
  textFirstBottom: {
    color: colors.borderColorGrey,
    fontSize: 14,
  },
  textSecondBottom: {
    textTransform: 'uppercase',
    marginLeft: 5,
    color: colors.primary,
    fontWeight: '500',
  },
  textThirdBottomContainer: {
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: 44,
    marginTop: 7,
    paddingRight: 7,
    marginRight: 8,
  },
  textThirdBottom: {
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: '500',
    padding: 12,
    left: 5,
  },
});
