import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  plusCircle: {
    zIndex: 15,
    color: colors.primary,
    marginBottom: 3,
    top: -1,
  },
  sliceImage: {
    position: 'absolute',
    bottom: -14,
    left: -23,
  },
  plusVisibleCircle: {
    backgroundColor: colors.colorNone,
    position: 'absolute',
    width: 72,
    height: 72,
    zIndex: 12,
    borderRadius: 50,
    left: -8,
    top: -9,
    overflow: 'hidden',
  },
  tabBarContainer: {
    marginTop: 27,
    width: '20%',
    opacity: 1,
  },
  plusBottom: {
    marginTop: 10,
    height: 30,
    backgroundColor: colors.white,
    zIndex: 1,
  },
  plusCenter: {
    height: 55,
    width: 56,
    backgroundColor: colors.white,
    zIndex: 14,
    borderRadius: 50,
  },
  plusAbsolute: {
    position: 'absolute',
  },
  height: {
    borderTopWidth: 0,
    borderTopColor: colors.colorNone,
    height: 98,
    paddingTop: 0,
    paddingBottom: 7,
    backgroundColor: colors.colorNone,
    borderWidth: 0,
    marginBottom: -7,
    position: 'absolute',
    zIndex: 10,
    elevation: 0,
    bottom: 0,
  },
  componentTab: {
    elevation: 0,
    backgroundColor: colors.white,
    height: 40,
    width: 50,
    zIndex: 11,
    position: 'absolute',
  },
  tabIconContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    width: '100%',
  },
  iconTab: {
    marginTop: 5,
  },
});

export default styles;
