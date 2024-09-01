import { 
    Song,
    IFetchSongResponse,
    ISongResponse,
    SongList,
    IDeleteSongResponse,
 } from "../models/songs";

 import { createAction } from '@reduxjs/toolkit';

const SONG_PREFIX = 'SONG';

/* APP STATE */

export const setSelectedSongsAction = createAction<SongList[]>(
  `${SONG_PREFIX}_SET_SELECTED_SONGS`,
);

export const isLoadingAction = createAction<boolean>(
  `${SONG_PREFIX}/API/SONGS_IS_LOADING`,
);

/* LOAD SONG */
export const fetchSongAction = createAction<string>(
  `${SONG_PREFIX}/API/FETCH_SONG`,
);

export const fetchSongDoneAction = createAction<ISongResponse>(
  `${SONG_PREFIX}/API/FETCH_SONG_DONE`,
);

/* LOAD ALL SONGS */
export const fetchAllSongsAction = createAction(
  `${SONG_PREFIX}/API/FETCH_ALL_SONGS`,
);

export const fetchAllSongsDoneAction = createAction<IFetchSongResponse>(
  `${SONG_PREFIX}/API/FETCH_ALL_SONGS_DONE`,
);

/* SAVE SONG */
export const isSavingAction = createAction<boolean>(
  `${SONG_PREFIX}API/SAVE_SONG_IS_SAVING`,
);

export const addSongAction = createAction<Song>(
  `${SONG_PREFIX}/API/ADD_SONG`,
);

export const updateSongAction = createAction<Song>(
  `${SONG_PREFIX}/API/UPDATE_SONG`,
);

export const setSaveSongDoneAction = createAction<ISongResponse>(
  `${SONG_PREFIX}/API/SAVE_SONG_DONE`,
);

/* DELETE SONG */

export const isDeletingAction = createAction<boolean>(
  `${SONG_PREFIX}API/DELETE_SONG_IS_DELETING`,
);

export const deleteSongAction = createAction<Song>(
  `${SONG_PREFIX}/API/DELETE_SONG`,
);

export const setDeleteSongDoneAction = createAction<IDeleteSongResponse>(
  `${SONG_PREFIX}/API/DELETE_SONG_DONE`,
);

