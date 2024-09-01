import { useEffect } from "react";
import Menubar from "../components/nav/Menubar";
import SongCard from "../components/cards/songCard";

import { TitleContainer, DashboardContainer, DashboardRow } from "./home.styles";

import { Song } from "../models/songs";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchAllSongsAction,  } from "../redux/actions";
import { selectAllSongs } from "../selectors/songSelector";


export default function Home() {
    // state
    const dispatch = useDispatch();

    const songList = useSelector(selectAllSongs,shallowEqual);
    
    useEffect(() => {
        dispatch(fetchAllSongsAction());
      }, [dispatch]);

    return (
        <>
            <TitleContainer>List of all songs.</TitleContainer>
            <Menubar />
            <DashboardContainer>
                <DashboardRow>
                    {songList?.map((song: Song) => (
                        <SongCard song={song} key={song._id} />
                    ))}
                </DashboardRow>
            </DashboardContainer>
        </>
    );
}