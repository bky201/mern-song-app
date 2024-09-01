import { useEffect, useState } from "react";
import axios from "axios";

import { StatContainer, StatText } from "./stats.styles";

export default function TotalAlbum() {
    // state
    const [totalAlbum, setTotalAlbum] = useState();
    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/stats");
            setTotalAlbum(data.totalAlbum);
        } catch (err) {
            console.log(err);            
        }
    }

    return (
        <StatContainer>
            <StatText>
                <span>Total number of albums: </span> 
                <span>{totalAlbum}</span>
            </StatText>
        </StatContainer>
    );
}