import { call, put } from 'redux-saga/effects'
import MarvelActions from '../Redux/MarvelRedux'

export function * getCharacters (api) {
  // make the call to the api
  const response = yield call(api.getCharacters)

  if (response.ok) {
    // do data conversion here if needed
    yield put(MarvelActions.getCharactersSuccess(response.data))
  } else {
    yield put(MarvelActions.getCharactersFailure())
  }
}
