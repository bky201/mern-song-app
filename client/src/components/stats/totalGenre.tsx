import { useEffect, useState } from "react";
import API from "../../api";

import { StatContainer, StatText } from "./stats.styles";

export default function TotalGenre() {
    // state
    const [totalGenre, setTotalGenre] = useState();
    
    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const { data } = await API.get("stats");
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