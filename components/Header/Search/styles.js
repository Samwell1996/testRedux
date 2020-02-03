import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const s = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: colors.greyPhotos,
    borderColor: colors.borderColorGrey,
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 6,
    paddingLeft: 40,
    paddingRight: 8,
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    zIndex: 2,
    color: colors.borderColorGrey,
    padding: 6,
    left: 8,
  },
  containerCancel: {
    height: 24,
  },
  textCancel: {
    color: colors.primary,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
