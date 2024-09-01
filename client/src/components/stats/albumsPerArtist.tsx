import { useEffect, useState } from "react";
import axios from "axios";

import { StatContainer, StatText } from "./stats.styles";

type AlbumsPerArtistProps = {
    _id: {
        album: string,
        artist: string,
    },
    count: BigInteger
}

export default function AlbumsPerArtist() {
    // state
    const [albumsPerArtist, setAlbumsPerArtist] = useState<AlbumsPerArtistProps[]>([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/stats");
            setAlbumsPerArtist(data.albumsPerArtist);
        } catch (err) {
            console.log(err);            
        }
    }

    const arrayAlbumsPerArtist = albumsPerArtist?.map((albumPerArtist: AlbumsPerArtistProps, index) => 
        <li key={index}>
          <p>{albumPerArtist?._id.album} per {albumPerArtist?._id.artist} : {albumPerArtist?.count} songs</p>
        </li>
      );

    return (
        <StatContainer>
            <StatText>Number of Albums per Artist:</StatText>
            <ul>{arrayAlbumsPerArtist}</ul>
        </StatContainer>
    );
}