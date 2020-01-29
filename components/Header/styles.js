import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { headerHeight } from '../../styles/dimensions';

export const s = StyleSheet.create({
  containerHeader: {
    padding: 8,
    backgroundColor: colors.white,
    borderBottomColor: colors.borderColorGrey,
    borderBottomWidth: 1,
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: headerHeight,
  },
  paddingAndroid: {
    paddingTop: 33,
  },
  paddingIphone: {
    paddingTop: 17,
  },
});
