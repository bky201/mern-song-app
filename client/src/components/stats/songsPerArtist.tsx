import { useEffect, useState } from "react";
import API from "../../api";

import { StatContainer, StatText } from "./stats.styles";

type SongPerArtistProps = {
    _id: string,
    count: BigInteger,
}

export default function SongsPerArtist() {
    // state
    const [songsPerArtist, setSongsPerArtist] = useState<SongPerArtistProps[]>([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await API.get("stats");
            setSongsPerArtist(data.songsPerArtist);
        } catch (err) {
            console.log(err);            
        }
    }

    const arraySongsPerArtist = songsPerArtist?.map((songPerArtist: SongPerArtistProps) => 
        <li key={songPerArtist._id}>
          <p>{songPerArtist._id} : {songPerArtist.count} songs</p>
        </li>
      );

    return (
        <StatContainer>
            <StatText>Number of Songs per Artist:</StatText>
            <ul>{arraySongsPerArtist}</ul>
        </StatContainer>
    );
}