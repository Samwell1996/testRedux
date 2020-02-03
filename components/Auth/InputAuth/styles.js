import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const s = StyleSheet.create({
  default: {
    borderColor: colors.borderColorGrey,
    borderWidth: 1,
    zIndex: 1,
    borderRadius: 4,
    height: 44,
    marginHorizontal: 16,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 39,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  error: {
    backgroundColor: colors.white,
    borderColor: colors.isErrorColor,
  },
  label: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
    paddingHorizontal: 5,
    zIndex: 4,
  },
  labelError: {
    fontSize: 16,
    color: colors.isErrorColor,
    fontWeight: '500',
    paddingHorizontal: 5,
    zIndex: 4,
  },
  borderDefault: {
    flex: 1,
    flexDirection: 'row',
    height: 3,
    backgroundColor: colors.white,
    top: -9,
    left: 0,
    zIndex: 3,
  },
  borderFocus: {
    height: 5,
    backgroundColor: colors.white,
    top: -11,
  },
  labelContent: {
    position: 'absolute',
    left: 14,
    top: -13,
    zIndex: 2,
  },
  textErrorGrey: {
    color: colors.borderColorGrey,
    marginTop: 5,
    marginHorizontal: 16,
  },
  textError: {
    color: colors.isErrorColor,
    marginTop: 5,
    marginHorizontal: 16,
  },
  icon: {
    color: colors.isErrorColor,
    position: 'absolute',
    top: -35,
    zIndex: 5,
    right: 23,
    flex: 1,
  },
});
