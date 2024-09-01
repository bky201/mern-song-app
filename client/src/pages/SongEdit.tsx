import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { TitleContainer, EditContainer, FormContainer, EditButton } from "./songEdit.styles";

import { Song } from "../models/songs";
import { useDispatch } from "react-redux";
import { fetchAllSongsAction,  updateSongAction } from "../redux/actions";

export default function SongEdit() {

    const dispatch = useDispatch();

    const [song, setSong] = useState<Song>({
        _id: "",
        title: "",
        artist: "",
        album: "",
        genre: "",
        slug: "",
        loading: false,
    });

    useEffect(() => {
        dispatch(fetchAllSongsAction());
      }, [dispatch]);


    // hooks
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params?.slug) {
            fetchSong();
        }
    }, [params?.slug]);

    const fetchSong = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/song/${params.slug}`);
            setSong(data.song);
        } catch (err) {
            console.log(err);
        }
    }
    
    const submit = () => {
        setSong({ ...song, loading: true});
        try {
            dispatch(updateSongAction(song));
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <TitleContainer>Edit Song</TitleContainer>
            <EditContainer>
            <FormContainer
                    type="text"
                    placeholder="Title"
                    value={song.title}
                    onChange={(e) => setSong({ ...song, title: e.target.value })}
                />
                <FormContainer
                    type="text"
                    placeholder="Artist"
                    value={song.artist}
                    onChange={(e) => setSong({ ...song, artist: e.target.value })}
                />
                <FormContainer
                    type="text"
                    placeholder="Album"
                    value={song.album}
                    onChange={(e) => setSong({ ...song, album: e.target.value })}
                />
                <FormContainer
                    type="text"
                    placeholder="Genre"
                    value={song.genre}
                    onChange={(e) => setSong({ ...song, genre: e.target.value })}
                />

                <EditButton onClick={submit} >
                    {song.loading ? "Saving..." : "Submit"}
                </EditButton>
            </EditContainer>
        </>
    );
}