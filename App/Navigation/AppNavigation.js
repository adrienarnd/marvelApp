import { StackNavigator } from 'react-navigation'
import CharacterDetailsScreen from '../Containers/CharacterDetailsScreen'
import CharactersListScreen from '../Containers/CharactersListScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CharacterDetailsScreen: {
    screen: CharacterDetailsScreen,
    navigationOptions: {
      headerTitle: 'Hero details',
      headerStyle: styles.header,
      headerTintColor: 'white'
    }
  },
  CharactersListScreen: { 
    screen: CharactersListScreen,
    navigationOptions: {
      header: null
    }
   }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'CharactersListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
