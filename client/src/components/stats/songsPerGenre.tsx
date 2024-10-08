import { useEffect, useState } from "react";
import axios from "axios";

import { StatContainer, StatText } from "./stats.styles";

type SongPerGenreProps = {
    _id: string,
    count: BigInteger,
}

export default function SongsPerGenre() {
    // state
    const [songsPerGenre, setSongsPerGenre] = useState<SongPerGenreProps[]>([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/stats");
            setSongsPerGenre(data.songsPerGenre);
        } catch (err) {
            console.log(err);            
        }
    }

    const arraySongsPerGenre = songsPerGenre?.map((songPerGenre: SongPerGenreProps) => 
        <li key={songPerGenre._id}>
          <p>{songPerGenre._id} : {songPerGenre.count} songs</p>
        </li>
      );

    return (
        <StatContainer>
            <StatText>Number of Songs per Genre:</StatText>
            <ul>{arraySongsPerGenre}</ul>
        </StatContainer>
    );
}