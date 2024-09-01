import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { ISongResponse, Song } from '../models/songs';

import { addSong } from '../redux/songsApi';

import { 
    addSongAction,
    setSaveSongDoneAction,
    isSavingAction,
 } from '../redux/actions';

 export function* addSongAsync(action: { payload: Song }): SagaIterator {
    try {
      yield put(isSavingAction(true));
  
      const response: ISongResponse = yield call(
        addSong, 
        action.payload
      );
      yield put(setSaveSongDoneAction(response));
    } catch (error) {
      yield put(
        setSaveSongDoneAction({
          song: action.payload,
          error: error as Error,
          isSuccessful: false,
        }),
      );
    } finally {
      yield put(isSavingAction(false));
    }
  }
  
  export function* addSongSaga(): SagaIterator {
    yield takeLatest(addSongAction, addSongAsync);
  }