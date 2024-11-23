import { useState } from 'react';
import SearchSection from './SearchSection.jsx';
import ContainerArtists from './ContainerArtists.jsx';
import ContainerAlbums from './ContainerAlbums.jsx';
import ContainerPlaylists from './ContainerPlaylists.jsx';
import { useSearchResult } from './SearchProvider.jsx';
import './styles/SearchPage.css';
import ContainerShows from './ContainerShows.jsx';
import ContainerEpisodes from './ContainerEpisodes.jsx';
import ContainerTracks from './ContainerTracks.jsx';

function SearchPage() {
  const { data } = useSearchResult();
  const [trackListening, setTrackListening] = useState(null);

  return data && (
    <>
      { data.tracks.items.length > 0 && (
        <SearchSection label={ 'Canciones' }>
          <ContainerTracks 
            items={data.tracks.items} 
            trackListening={trackListening}
            setTrackListening={setTrackListening}
          />
        </SearchSection>
      )}
      { data.artists.items.length > 0 && (
        <SearchSection label={ 'Artistas' }>
          <ContainerArtists items={ data.artists.items } />
        </SearchSection>
      ) }
      { data.albums.items.length > 0 && (
        <SearchSection label={ 'Álbumes' }>
          <ContainerAlbums items={ data.albums.items } />
        </SearchSection>
      ) }
      { data.playlists.items.length > 0 && (
        <SearchSection label={ 'Playslists' }>
          <ContainerPlaylists items={ data.playlists.items } />
        </SearchSection>
      ) }
      { data.shows.items.length > 0 && (
        <SearchSection label={ 'Poscasts' }>
          <ContainerShows items={ data.shows.items } />
        </SearchSection>
      ) }
      { data.episodes.items.length > 0 && (
        <SearchSection label={ 'Episodios' }>
          <ContainerEpisodes items={ data.episodes.items } />
        </SearchSection>
      ) }
    </>
  );
}

export default SearchPage;