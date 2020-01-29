import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { headerHeight } from '../../../styles/dimensions';

export const s = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2,
    flex: 1,
    marginTop: headerHeight,
    backgroundColor: colors.grey,
    height: '100%',
  },
  list: {
    paddingBottom: 270,
  },
  line: {
    zIndex: 100,
    backgroundColor: colors.borderColorGrey,
    position: 'absolute',
    marginTop: 78,
    height: 1,
    width: '100%',
    bottom: 0,
  },
});
