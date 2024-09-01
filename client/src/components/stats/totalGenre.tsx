import { useEffect, useState } from "react";
import axios from "axios";

import { StatContainer, StatText } from "./stats.styles";

export default function TotalGenre() {
    // state
    const [totalGenre, setTotalGenre] = useState();
    
    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/stats");
            setTotalGenre(data.totalGenre);
        } catch (err) {
            console.log(err);            
        }
    }

    return (
        <StatContainer>
            <StatText>
                <span>Total type of genre:  </span> 
                <span>{totalGenre}</span>
            </StatText>
        </StatContainer>
    );
}