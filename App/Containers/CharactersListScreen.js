import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import MarvelActions from '../Redux/MarvelRedux'

// Styles
import styles from './Styles/CharactersListScreenStyle'

class CharactersListScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillmount () {
    this.props.getCharacters()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>CharactersListScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
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
    getCharacters: dispatch(MarvelActions.getCharacters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersListScreen)
