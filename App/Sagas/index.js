import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { MarvelTypes } from '../Redux/MarvelRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCharacters } from './MarvelSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    // Marvel
    takeLatest(MarvelTypes.GET_CHARACTERS, getCharacters, api)
  ])
}
