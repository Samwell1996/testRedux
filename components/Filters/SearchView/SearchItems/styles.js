import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export const s = StyleSheet.create({
  containerItem: {
    backgroundColor: colors.white,
    flex: 1,
  },
  itemTitle: {
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  icon: {
    position: 'absolute',
    zIndex: 7,
    color: colors.borderColorGrey,
    right: 6,
    top: 12,
  },
  textColors: {
    color: colors.textColors,
    fontSize: 16,
  },
  line: {
    bottom: 0,
    backgroundColor: colors.borderColorGrey,
    height: 1,
    marginHorizontal: 16,
  },
});
