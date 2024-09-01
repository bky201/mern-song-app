import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { Song } from "../../models/songs";

import { FormInput, UploadButton } from "./uploadForm.styles";

import { fetchAllSongsAction, addSongAction } from "../../redux/actions";

export default function UploadForm() {

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

    const handleClick = () => {
        setSong({ ...song, loading: true});
        try {
            dispatch(addSongAction(song));
            toast.success("Song created successfully.");
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <FormInput
                type="text"
                placeholder="Title"
                value={song.title}
                onChange={(e) => setSong({ ...song, title: e.target.value })}
            />
            <FormInput
                type="text"
                placeholder="Artist"
                value={song.artist}
                onChange={(e) => setSong({ ...song, artist: e.target.value })}
            />
            <FormInput
                type="text"
                placeholder="Album"
                value={song.album}
                onChange={(e) => setSong({ ...song, album: e.target.value })}
            />
            <FormInput
                type="text"
                placeholder="Genre"
                value={song.genre}
                onChange={(e) => setSong({ ...song, genre: e.target.value })}
            />

            <UploadButton onClick={handleClick} >
                {song.loading ? "Saving..." : "Submit"}
            </UploadButton>
        </>
    );
}