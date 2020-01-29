import { Platform, StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabCenter: {
    textAlign: 'center',
    fontSize: 10,
    backgroundColor: colors.white,
    paddingBottom: 7,
  },
  header: {
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.borderColorGrey,
      },
    }),
  },
});

export default styles;
