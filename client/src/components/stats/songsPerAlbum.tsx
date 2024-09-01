import { useEffect, useState } from "react";
import axios from "axios";

import { StatContainer, StatText } from "./stats.styles";

type SongsPerAlbumProps = {
    _id: string,
    count: BigInteger
}


export default function SongsPerAlbum() {
    // state
    const [songsPerAlbum, setSongsPerAlbum] = useState<SongsPerAlbumProps[]>([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/stats");
            setSongsPerAlbum(data.songsPerAlbum);
        } catch (err) {
            console.log(err);            
        }
    }

    const arraySongsPerAlbum = songsPerAlbum?.map((songPerAlbum: SongsPerAlbumProps) => 
        <li key={songPerAlbum._id}>
          <p>Songs per {songPerAlbum._id} album : {songPerAlbum.count} songs</p>
        </li>
      );

    return (
        <StatContainer>
            <StatText>Number of Songs per Album:</StatText>
            <ul>{arraySongsPerAlbum}</ul>
        </StatContainer>
    );
}