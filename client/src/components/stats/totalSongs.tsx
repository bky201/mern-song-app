import { useEffect, useState } from "react";
import axios from "axios";

import { StatContainer, StatText } from "./stats.styles";

export default function TotalSongs() {
    // state
    const [totalSongs, setTotalSongs] = useState();

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/stats");
            setTotalSongs(data.totalSongs);
        } catch (err) {
            console.log(err);            
        }
    }

    return (
        <StatContainer>
            <StatText>
                <span>Total Number of Songs: </span>
                <span>
                    {totalSongs}
                </span>
            </StatText>
        </StatContainer>
);
}