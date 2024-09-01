import { Link } from "react-router-dom";

import { CardContainer, CardContent, CardElement, SongContainer, SongFeature } from "./songCard.styles";

export type SongProps = {
    title: string,
    artist: string,
    album: string,
    genre: string,
    slug: string,
    loading: boolean,
  };

export default function SongCard({ song }: { song: SongProps }) {
    return (
        <CardContainer>
            <Link to={`/song/${song.slug}`}>
                <CardContent>
                    <CardElement>
                        <div>
                            <SongContainer>Song Title: {song?.title}</SongContainer>
                            <SongContainer>Song Artist: {song?.artist}</SongContainer>
                            <SongContainer>Song Album: {song?.album}</SongContainer>
                            <SongContainer>Song Genre: {song?.genre}</SongContainer>
                        </div>

                        <SongFeature>Song features</SongFeature>
                    </CardElement>
                </CardContent>
            </Link>
        </CardContainer>
    );
}