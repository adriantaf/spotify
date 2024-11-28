import Filter from "../common/components/Filter";
import './styles/Home.css';
import { useState } from "react";
import HeroSection from "./HeroSection";
import data from '../lib/data.json';

function Home() {
  const heroItems = data.slice(0, 8);
  const [hoverImage, setHoverImage] = useState([]);
  const ITEMS = [
    'Todo', 'Música', 'Podcast'
  ];

  return (
    <>
      <div
        className="hm-bg-gradient"
        style={ { backgroundImage: `url(${hoverImage})` } }
      ></div>
      <div className="hm-cont">
        <header className="hm-header">
          <Filter items={ ITEMS } indexSelected={ 0 } />
        </header>
        <HeroSection
          items={ heroItems }
          setHoverImage={ setHoverImage } />
        <main className="hm-main">
          <section className="hm-playlists"></section>
        </main>
      </div>
    </>
  )
}

export default Home;