import { useEffect, useState } from "react";
import axios from "axios";

import { StatContainer, StatText } from "./stats.styles";

export default function TotalArtists() {
    // state
    const [totalArtists, setTotalArtists] = useState();

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/stats");
            setTotalArtists(data.totalArtists);
        } catch (err) {
            console.log(err);            
        }
    }

    return (
        <StatContainer>
            <StatText>
                <span>Total number of artists available:  </span> 
                <span>{totalArtists}</span>
            </StatText>
        </StatContainer>
    );
}