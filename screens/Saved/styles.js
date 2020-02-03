import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  containerSearch: {
    flex: 1,
    backgroundColor: colors.grey,
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    top: 0,
  },
});
