import { createReducer } from '@reduxjs/toolkit';
import { ISongState } from '../models/songs';
import { SongList } from '../models/songs';
import { 
    isLoadingAction,
    fetchAllSongsDoneAction,
    isDeletingAction,
    isSavingAction,
    setDeleteSongDoneAction,
    setSaveSongDoneAction,
    setSelectedSongsAction,
 } from './actions';

export const songInitialState: ISongState = {
    isLoading: false,
    isSaving: false,
    isDeleting: false,
    selectedSongs: ([] as SongList[]),
  };

export default createReducer(songInitialState, (builder) => 
    builder
        .addCase(isLoadingAction, (state, { payload }) => ({
            ...state,
            isLoading: payload,
        }))
        .addCase(isSavingAction, (state, { payload }) => ({
            ...state,
            isSaving: payload,
        }))
        .addCase(isDeletingAction, (state, { payload }) => ({
            ...state,
            isDeleting: payload,
        }))
        .addCase(setSelectedSongsAction, (state, { payload }) => ({
            actionTriggerRefetching: undefined,
            ...state,
            selectedSongs: payload,
          }))
        .addCase(fetchAllSongsDoneAction, (state, { payload }) => ({
            ...state,
            songListResponse: payload,
        }))
        .addCase(setSaveSongDoneAction, (state, { payload }) => ({
            ...state,
            songSaveResponse: payload,
        }))
        .addCase(setDeleteSongDoneAction, (state, { payload }) => ({
            ...state,
            deleteSongResponse: payload,
        }))
); 

