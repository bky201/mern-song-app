import { AxiosError } from 'axios';

export type Song = {
    _id: string,
    title: string,
    artist: string,
    album: string,
    genre: string,
    slug: string,
    loading: boolean,
}

export type SongList = Song & {
  id: string;
};

export interface IFetchSongResponse {
  songs?: SongList[];
  error?: AxiosError | Error;
  isSuccessful?: boolean;
}

export interface ISongResponse {
  song: Song | undefined;
  error?: AxiosError | Error;
  isSuccessful?: boolean;
}

export interface IDeleteSongResponse {
  song: Song | undefined;
  error?: AxiosError | Error;
  isSuccessful?: boolean;
}

export interface ISongState {
  isLoading: boolean;
  isSaving: boolean;
  isDeleting: boolean;
  songListResponse?: IFetchSongResponse;
  selectedSongs: SongList[];
  songSaveResponse?: ISongResponse;
  deleteSongResponse?: IDeleteSongResponse;
}