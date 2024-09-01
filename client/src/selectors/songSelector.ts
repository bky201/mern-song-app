import { 
    IDeleteSongResponse,
    ISongResponse,
    SongList,
 } from '../models/songs';

import { StoreState } from '../redux/index';
  
export const getSongsLoadingState = (state: StoreState): boolean =>
    state.song.isLoading;
  
export const selectAllSongs = (state: StoreState): SongList[] =>
    state.song.songListResponse?.songs || [];

export const selectIsSaving = (state: StoreState): boolean =>
    state.song.isSaving;
  
export const getSongSaveResponse = (
    state: StoreState,
  ): ISongResponse | undefined => state.song.songSaveResponse;
  
export const getDeleteSongResponse = (
    state: StoreState,
  ): IDeleteSongResponse | undefined => state.song.deleteSongResponse;
  