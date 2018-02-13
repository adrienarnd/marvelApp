import React, { Component } from 'react'
import { ScrollView, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

// External lib
import Swiper from 'react-native-swiper'

// Styles
import styles from './Styles/CharacterDetailsScreenStyle'
import { Images } from '../Themes'

// Datas (temporaire car API Marvel non fonctionnelle)
import data from '../../characters'

class CharacterDetailsScreen extends Component {
  renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

  render () {
    const { characterIndex } = this.props.navigation.state.params

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        
        <Swiper 
          style={{ marginTop: 30 }}
          index={characterIndex}
          renderPagination={this.renderPagination}
        >
          {data.characters.map((character, index) =>
            <ScrollView style={{ marginBottom: 100 }} key={index}>
              <View style={styles.centered}>
                <Image style={styles.logo} source={character.avatar} />
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.text}>{character.description}</Text>
                <Text style={styles.text}>{character.name} est présent dans {character.comics.available} comics dont :</Text>
                {character.comics.items.map((item, index) => 
                  <Text style={styles.text} key={index}>{item.name}</Text>
                )}
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
