import './styles/Home.css';
import { useEffect, useRef, useState } from "react";
import Filter from "../common/components/Filter";
import HeroSection from "./HeroSection";
import dataHeroSection from '../lib/data.json';
import ScrollView from "../common/layouts/ScrollView";
import SearchSection from '../search/SearchSection';
import { useToken } from '../common/context/TokenProvider';
import ContainerAlbums from '../search/ContainerAlbums';

function Home() {
  const { token } = useToken();
  const [data, setData] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);
  const [scrollTop, setScrollTop] = useState(null);
  const refHeader = useRef(null);
  const heroItems = dataHeroSection.slice(0, 8);
  const QUERY = 'spotify';
  const ITEMS = [
    'Todo', 'Música', 'Podcast'
  ];

  function handleScroll(e) {
    setScrollTop(e.target.scrollTop);
    // console.log(refHeader.current.clientHeight)
  }

  useEffect(() => {
    const params = new URLSearchParams({
      query: QUERY,
      type: 'album', //track,album,artist,playlist,episode,audiobook,show
      limit: 15,
      market: 'MX',
    });

    const url = `https://api.spotify.com/v1/search?${params.toString()}`
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error:', error));
  }, [token]);

  return (
    <ScrollView onScroll={ handleScroll }>
      <div
        className="hm-bg-gradient"
        style={ {
          "--bg-image": hoverImage ? `url(${hoverImage})` : "none",
          "--opacity": hoverImage ? .6 : 0,
        } }
      ></div>
      <div
        className="hm-cont"
        onScroll={ handleScroll }
      >
        <header
          className="hm-header"
          ref={ refHeader }
          style={{
            "--bg-opacity": refHeader?.current && (
              scrollTop >= refHeader.current.clientHeight
                ? 1
                : scrollTop * 1 / refHeader.current.clientHeight
            )
          }}
        >
          <Filter items={ ITEMS } indexSelected={ 0 } />
        </header>
        <HeroSection
          items={ heroItems }
          setHoverImage={ setHoverImage }
        />
        <main className="hm-main">
          <section className="hm-playlists">
            { data?.albums?.items?.length > 0 && (
              <SearchSection label={ 'Solo para ti' }>
                <ContainerAlbums items={ data.albums.items.slice(0, 5) } />
              </SearchSection>
            ) }
            { data?.albums?.items?.length > 0 && (
              <SearchSection label={ 'Recomendaciones' }>
                <ContainerAlbums items={ data.albums.items.slice(5, 10) } />
              </SearchSection>
            ) }
            { data?.albums?.items?.length > 0 && (
              <SearchSection label={ 'De todo un poco' }>
                <ContainerAlbums items={ data.albums.items.slice(10, 15) } />
              </SearchSection>
            ) }
          </section>
        </main>
      </div>
    </ScrollView>
  )
}

export default Home;