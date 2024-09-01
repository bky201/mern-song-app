import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IFetchSongResponse } from '../models/songs';

import { getSongs } from '../redux/songsApi';

import { 
    fetchAllSongsDoneAction,
    fetchAllSongsAction,
    isLoadingAction,
 } from '../redux/actions';

 export function* getSongsAsync(): SagaIterator {
    try {
      yield put(isLoadingAction(true));
      const response: IFetchSongResponse = yield call(getSongs);
  
      yield put(fetchAllSongsDoneAction(response));
    } catch (error) {
      yield put(
        fetchAllSongsDoneAction({
          songs: [],
          error: error as Error,
          isSuccessful: false,
        }),
      );
    } finally {
      yield put(isLoadingAction(false));
    }
  }
  
  export function* getSongsSaga(): SagaIterator {
    yield takeLatest(fetchAllSongsAction, getSongsAsync);
  }