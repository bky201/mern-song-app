import { all } from 'redux-saga/effects';

import { getSongsSaga } from './getSongsSaga';
import { addSongSaga } from './addSongSaga';
import { updateSongSaga } from './updateSongSaga';
import { deleteSongSaga } from './deleteSongSaga';

export default function* rootSaga() {
    yield all([getSongsSaga(), addSongSaga(), updateSongSaga(), deleteSongSaga()]);
  }