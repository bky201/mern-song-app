import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import song, { songInitialState } from "./reducers";

export const reducer = {
  song,
};

export type SongState = StateFromReducersMapObject<typeof reducer>;
export type StoreState = SongState;

export const rootInitialState: StoreState = {
  song: songInitialState,
};
