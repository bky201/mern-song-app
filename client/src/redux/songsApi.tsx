import { ISongResponse, IFetchSongResponse, IDeleteSongResponse, SongList, Song } from "../models/songs";
import API from "../api";

export const getSongs = async (): Promise<IFetchSongResponse> => {
    try {
        const response = await API.get("songs");
        return {
            songs: response.data as SongList[],
            isSuccessful: true,
          };
    } catch (error) {
        return {
            isSuccessful: false,
            error: new Error('An error has occured'),
        }
    }
}

export const getSong = async (id: string): Promise<ISongResponse> => {
    try {
        const response = await API.get(`song/${id}`);
        return {
            song: response.data as Song,
            isSuccessful: true,
          };
    } catch (error) {
        return {
            song: undefined,
            isSuccessful: false,
            error: new Error('An error has occured'),
          };
    }
}


export const addSong = async (song: Song): Promise<ISongResponse> => {
    try {
        const response = await API.post("song", song);
        return {
            song: response.data as Song,
            isSuccessful: true,
          };
    } catch (error) {
        return {
            song,
            isSuccessful: false,
            error: new Error('An error has occured'),
          };
    }
}

export const updateSong = async (song: Song): Promise<ISongResponse> => {
    try {
        const response = await API.put(`song/${song._id}`, song);
        return {
            song: response.data as Song,
            isSuccessful: true,
            };
    } catch (error) {
        return {
            song,
            isSuccessful: false,
            error: new Error('An error has occured'),
            };
    }
} 

export const deleteSong = async (song: Song): Promise<IDeleteSongResponse> => {
    try {
        const response = await API.delete(`song/${song._id}`);
        return {
            song: response.data as Song,
            isSuccessful: true,
          }
    } catch (error) {
        return {
            song,
            isSuccessful: false,
            error: new Error('An error has occured'),
          };
    }
}