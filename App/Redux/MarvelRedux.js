import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCharacters: [''],
  getCharactersSuccess: [''],
  getCharactersFailure: null
})

export const MarvelTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  characters: null,
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */

// request characters
export const request = (state) =>
  state.merge({ fetching: true })

// successful characters lookup
export const getCharactersSuccess = (state, action) => {
  const { characters } = action
  return state.merge({ fetching: false, error: null, characters })
}

// failed to get characters
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CHARACTERS]: request,
  [Types.GET_CHARACTERS_SUCCESS]: getCharactersSuccess,
  [Types.GET_CHARACTERS_FAILURE]: failure
})
