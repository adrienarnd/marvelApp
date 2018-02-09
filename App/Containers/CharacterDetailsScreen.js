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
        
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <Swiper 
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
        </ScrollView>
      </View>
    )
  }
}

const characters = [
  {
    id: 1,
    name: 'Iron-Man',
    avatar: Images.marvel
  },
  {
    id: 2,
    name: 'Spider-Man',
    avatar: Images.marvel
  },
  {
    id: 3,
    name: 'Ant-Man',
    avatar: Images.marvel
  },
  {
    id: 4,
    name: 'Hulk',
    avatar: Images.marvel
  },
  {
    id: 5,
    name: 'Thor',
    avatar: Images.marvel
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
