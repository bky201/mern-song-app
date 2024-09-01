import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { TitleContainer, CardContainer, CardContent, CardElement, ButtonContainer, Button } from "./songView.styles";

import { Song } from "../models/songs";
import { useDispatch  } from "react-redux";
import { fetchAllSongsAction, deleteSongAction } from "../redux/actions";


export default function SongView() {
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
    const params = useParams();

    useEffect(() => {
        if (params?.slug) {
            fetchSong();
        }
    }, [params]);

    const fetchSong = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/song/${params.slug}`);
            setSong(data.song);
        } catch (err) {
            console.log(err);
        }
    }

     // hooks
     const navigate = useNavigate();

     const handleEdit = async () => {
        try {
            navigate(`/song/${song.slug}/edit`);
          } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = () => {
        setSong({ ...song, loading: true});
        try {
            dispatch(deleteSongAction(song));
            navigate("/")
        } catch (err) {
            console.log(err);
        }
      };
        

    return (
        <div>
            <TitleContainer>Song Detail</TitleContainer>
            <CardContainer>
                <CardContent>
                    <CardElement>
                        <h3>Song Title: {song?.title}</h3>
                        <h3>Song Artist: {song?.artist}</h3>
                        <h3>Song Album: {song?.album}</h3>
                        <h3>Song Genre: {song?.genre}</h3>
                        <ButtonContainer>
                            <Button onClick={handleEdit} >
                                Edit
                            </Button>
                            <Button onClick={handleDelete} >
                                Delete
                            </Button>
                        </ButtonContainer>
                    </CardElement>
                </CardContent>
            </CardContainer>
        </div>
    );
}


