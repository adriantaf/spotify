import Filter from "../common/components/Filter";
import './styles/Home.css';
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";

function Home() {
  const [data, setData] = useState(null);
  const [heroItems, setHeroItems] = useState([]);
  const [hoverImage, setHoverImage] = useState([]);
  const ITEMS = [
    'Todo', 'Música', 'Podcast'
  ];

  useEffect(() => {
    fetch('/src/lib/data.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setHeroItems(data.slice(0, 8));
      });
  }, []);

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