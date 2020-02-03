import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFilter: {
    paddingRight: 10,
    paddingLeft: 19,
  },
});
