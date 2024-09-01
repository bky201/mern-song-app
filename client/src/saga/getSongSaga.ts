import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { ISongResponse } from '../models/songs';

import { getSong } from '../redux/songsApi';

import { 
    fetchSongDoneAction,
    fetchSongAction,
    isLoadingAction,
 } from '../redux/actions';

 export function* getSongAsync(action: { payload: string }): SagaIterator {
    try {
      yield put(isLoadingAction(true));
      const response: ISongResponse = yield call(getSong, action.payload);

      yield put(fetchSongDoneAction(response));
    } catch (error) {
      yield put(
        fetchSongDoneAction({
          song: undefined,
          error: error as Error,
          isSuccessful: false,
        }),
      );
    } finally {
      yield put(isLoadingAction(false));
    }
  }
  
  export function* getSongsSaga(): SagaIterator {
    yield takeLatest(fetchSongAction, getSongAsync);
  }