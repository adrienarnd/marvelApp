import React, { Component } from 'react'
import { ScrollView, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

// External lib
import Swiper from 'react-native-swiper'

// Styles
import styles from './Styles/CharacterDetailsScreenStyle'
import { Images } from '../Themes'
import data from '../../characters'

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
          {data.characters.map((character, index) =>
            <ScrollView style={{ marginBottom: 100 }} key={index}>
              <View style={styles.centered}>
                <Image style={styles.logo} source={character.avatar} />
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.description}>{character.description}</Text>
              </View>
            </ScrollView>
          )}
        </Swiper>
      </View>
    )
  }
}

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
