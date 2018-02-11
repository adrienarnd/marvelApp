import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 2,
    aspectRatio: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.eggplant
  },
  image: {
    width: Metrics.icons.xxl,
    height: Metrics.icons.xxl,
    margin: Metrics.baseMargin,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'black'
  },
  label: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.text
  }
})
