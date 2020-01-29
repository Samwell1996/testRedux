import { Platform, StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const s = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.borderColorGrey,
      },
    }),
  },
  textHeader: {
    color: colors.primary,
    fontSize: 20,
    marginRight: 16,
  },
  icon: {
    color: colors.primary,
    marginLeft: 16,
  },
  textLocation: {
    color: colors.textColors,
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  line: {
    height: 1,
    backgroundColor: colors.tabColorGrey,
    marginHorizontal: 16,
  },
  content: {
    marginTop: 12,
  },
  containerResults: {
    backgroundColor: colors.primary,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textResults: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
});
