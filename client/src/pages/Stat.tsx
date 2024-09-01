import TotalSongs from "../components/stats/totalSongs";
import TotalArtists from "../components/stats/totalArtists";
import TotalAlbum from "../components/stats/totalAlbum";
import TotalGenre from "../components/stats/totalGenre";
import SongsPerArtist from "../components/stats/songsPerArtist";
import SongsPerAlbum from "../components/stats/songsPerAlbum";
import SongsPerGenre from "../components/stats/songsPerGenre";
import AlbumsPerArtist from "../components/stats/albumsPerArtist";

import { TitleContainer } from "./stat.styles";

export default function Stat() {

    return (
        <div>
            <TitleContainer>Statistics on available songs.</TitleContainer>
            <TotalSongs />
            <TotalArtists />
            <TotalAlbum />
            <TotalGenre />
            <SongsPerArtist />
            <SongsPerAlbum />
            <SongsPerGenre />
            <AlbumsPerArtist />
        </div>
    );
}