import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  containerNoMessages: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.grey,
    flex: 1,
  },
  list: {
    paddingBottom: 100,
    zIndex: 2,
  },
  textNoMessages: {
    fontSize: 18,
    color: colors.tabColorGrey,
    marginVertical: 16,
  },
  line: {
    zIndex: 3,
    backgroundColor: colors.borderColorGrey,
    position: 'absolute',
    width: '100%',
    height: 1,
    bottom: 0,
  },
});
