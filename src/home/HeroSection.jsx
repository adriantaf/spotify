/* eslint-disable react/prop-types */
import { BsPlayFill } from "react-icons/bs";
import './styles/HeroSection.css';

function HeroSection({ items, setHoverImage }) {
  return (
    <section className="hm-hero">
      { items && items.map((item) => (
        <PlaylistHeroSection
          key={ item.id }
          name={ item.name }
          img={ item.img }
          setHoverImage={ setHoverImage } />
      )) }
    </section>
  );
}

function PlaylistHeroSection({ img, name, setHoverImage }) {
  return (
    <article 
      className="hm-hero__playlist"
      onMouseEnter={() => setHoverImage(img)}
    >
      <img
        className="hm-hero__playlist__img"
        src={ img }
        alt="Image of a playlist" />
      <div className="hm-hero__playlist__cont-info">
        <p>{ name }</p>
        <button className='hm-hero__playlist__btn-play'>
          <BsPlayFill />
        </button>
      </div>
    </article>
  )
}

export default HeroSection;