import React, { Component } from 'react'
import { ScrollView, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

// External lib
import Swiper from 'react-native-swiper'

// Styles
import styles from './Styles/CharacterDetailsScreenStyle'
import { Images } from '../Themes'

class CharacterDetailsScreen extends Component {
  render () {
    const { characterIndex } = this.props.navigation.state.params

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        
        <Swiper 
          style={{ marginTop: 30 }}
          index={characterIndex}
          dotColor='white'
          activeDotColor='black'
        >
          {characters.map((character, index) => 
            <View style={styles.centered} key={index}>
              <Image source={character.avatar} style={styles.logo} />
              <Text style={styles.label}>{character.name}</Text>
            </View>
          )}
        </Swiper>
      </View>
    )
  }
}

const characters = [
  {
    id: 1,
    name: 'Iron-Man',
    avatar: Images.ironMan
  },
  {
    id: 2,
    name: 'Spider-Man',
    avatar: Images.spiderMan
  },
  {
    id: 3,
    name: 'Captain-America',
    avatar: Images.captainAmerica
  },
  {
    id: 4,
    name: 'Hulk',
    avatar: Images.hulk
  },
  {
    id: 5,
    name: 'Thor',
    avatar: Images.thor
  },
  {
    id: 6,
    name: 'Wolverine',
    avatar: Images.wolverine
  }
]

const mapStateToProps = (state) => {
  return {
    characters: state.marvel.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsScreen)
