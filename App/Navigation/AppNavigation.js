import { StackNavigator } from 'react-navigation'
import CharactersListScreen from '../Containers/CharactersListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CharactersListScreen: { screen: CharactersListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CharactersListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
