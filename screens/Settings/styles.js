import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 17,
  },
  imageText: {
    color: colors.tabColorGrey,
    marginTop: 5,
  },
  centerContent: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColorGrey,
    marginBottom: 17,
  },
  containerInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  line: {
    height: 1,
    backgroundColor: colors.borderColorGrey,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 18,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 11,
  },
  iconChevron: {
    color: colors.greyColorIconChevron,
    marginTop: 10,
    marginRight: 10,
  },
  containerLogOut: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColorGrey,
  },
  containerButtonLogOut: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textLogOut: {
    fontSize: 18,
    justifyContent: 'center',
    textTransform: 'uppercase',
    color: colors.primary,
    marginTop: 7,
    marginBottom: 10,
  },
  iconLogOut: {
    color: colors.primary,
    marginRight: 8,
    marginTop: 9,
    marginBottom: 10,
  },
});
