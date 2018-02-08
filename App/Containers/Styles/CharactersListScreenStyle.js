import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginBottom: 36,
    paddingTop: Metrics.section
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  componentButton: {
    borderColor: Colors.border,
    borderWidth: 1
  },
  banner: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.banner,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36
  },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow
  }
})
