import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IDeleteSongResponse, Song } from '../models/songs';

import { deleteSong } from '../redux/songsApi';

import { 
    deleteSongAction,
    fetchAllSongsAction,
    isDeletingAction,
    setDeleteSongDoneAction,
 } from '../redux/actions';

export function* deleteSongAsync(action: { payload: Song }): SagaIterator {
    try {
      yield put(isDeletingAction(true));
  
      const response: IDeleteSongResponse = yield call(
        deleteSong,
        action.payload,
      );
  
      yield put(fetchAllSongsAction());
  
      yield put(setDeleteSongDoneAction(response));

    } catch (error) {
      yield put(
        setDeleteSongDoneAction({
          song: action.payload,
          error: error as Error,
          isSuccessful: false,
        }),
      );
    } finally {
      yield put(isDeletingAction(false));
    }
  }
  
  export function* deleteSongSaga(): SagaIterator {
    yield takeLatest(deleteSongAction, deleteSongAsync);
  }
  