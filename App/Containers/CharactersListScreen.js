import React, { Component } from 'react'
import { View, ScrollView, FlatList, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

// Redux Actions
import MarvelActions from '../Redux/MarvelRedux'

// Components
import ButtonBox from '../Components/ButtonBox'

// Styles
import styles from './Styles/CharactersListScreenStyle'
import { Images } from '../Themes'

class CharactersListScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillmount () {
    // On charge les données de personnages
    this.props.getCharacters()
  }

  // Permet l'extraction de l'id de l'item courant
  _keyExtractor = (item, index) => item.id

  // Permet de se diriger vers le détail d'un personnage
  _goToCharacterDetails = (characterIndex) => {
    this.props.navigation.navigate('CharacterDetailsScreen', { characterIndex })
  }

  renderItem = (item, index) => {
    return (
      <View style={styles.buttonsContainer}>
        <ButtonBox
          onPress={this._goToCharacterDetails.bind(this, index)}
          style={styles.componentButton}
          image={item.avatar}
          text={item.name}
        />
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        {this.props.fetching && 
          <ActivityIndicator style={styles.loader} size='large' color='white' />
        }
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.marvel} style={styles.logo} />
          </View>

          <FlatList
            data={characters}
            renderItem={({item, index}) => this.renderItem(item, index)}
            keyExtractor={this._keyExtractor}
            numColumns={2}
          />
        </ScrollView>

        <View style={styles.banner}>
          <Text style={styles.bannerLabel}>Made with ❤️ by Adrien Arnaud</Text>
        </View>
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
    characters: state.marvel.characters,
    fetching: state.marvel.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: dispatch(MarvelActions.getCharacters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersListScreen)
