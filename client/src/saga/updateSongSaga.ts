import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { ISongResponse, Song } from '../models/songs';

import { updateSong } from '../redux/songsApi';

import { 
    updateSongAction,
    setSaveSongDoneAction,
    isSavingAction,
 } from '../redux/actions';

 export function* updateSongAsync(action: { payload: Song }): SagaIterator {
    try {
      yield put(isSavingAction(true));
  
      const response: ISongResponse = yield call(
        updateSong, 
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
  
  export function* updateSongSaga(): SagaIterator {
    yield takeLatest(updateSongAction, updateSongAsync);
  }