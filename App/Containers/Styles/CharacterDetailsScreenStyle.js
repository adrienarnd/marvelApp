import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.section
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    borderRadius: 150
  },
  centered: {
    alignItems: 'center'
  },
  name: {
    paddingTop: 20,
    ...Fonts.style.h2,
    fontSize: 16,
    color: Colors.text
  },
  description: {
    padding: 20,
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.text,
    textAlign: 'justify'
  }
})
