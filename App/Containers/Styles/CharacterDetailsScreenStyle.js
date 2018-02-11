import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.section
  },
  loader: {
    position: 'absolute', 
    top: 0, 
    right: 0, 
    bottom: 0, 
    left: 0, 
    zIndex: 1
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    borderRadius: 150,
    borderWidth: 5,
    borderColor: 'black'
  },
  centered: {
    alignItems: 'center'
  },
  label: {
    paddingTop: 20,
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.text
  }
})
