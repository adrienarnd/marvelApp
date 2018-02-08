import React, { Component } from 'react'
import { View, ScrollView, FlatList, TouchableOpacity, Image, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
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
    this.props.getCharacters()
  }

  _keyExtractor = (item, index) => item.id

  renderItem = ({item}) => {
    return (
      <View style={styles.buttonsContainer}>
        <ButtonBox 
          onPress={this.openComponents} 
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
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.marvel} style={styles.logo} />
          </View>

          <FlatList
            data={characters}
            renderItem={this.renderItem}
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
    characters: state.marvel.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: dispatch(MarvelActions.getCharacters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersListScreen)
