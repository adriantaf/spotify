/* eslint-disable react/prop-types */
import { BsArrowRightShort, BsCollectionFill, BsPinAngleFill, BsPlayFill, BsPlus } from 'react-icons/bs';
import './Aside.css';
import imgMyLikes from '../assets/images/me-gusta.png';
import imgMyEpisodes from '../assets/images/mis-episodios.png';
import { Fragment, useEffect, useRef, useState } from 'react';
import Filter from '../common/components/Filter';

function Aside() {
  const itemsContainerRef = useRef(null);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const container = itemsContainerRef.current;
      if (!container) return;
      setShowShadow(container.scrollTop > 0);
    }

    const container = itemsContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <aside className='as-aside'>
      <section className='as-header'>
        <button className='as-btn-toggle'>
          <BsCollectionFill size='1.3rem' />
          <span>Tu biblioteca</span>
        </button>
        <div className='as-header__right'>
          <button className='as-button-header circle'><BsPlus /></button>
          <button className='as-button-header circle'><BsArrowRightShort /></button>
        </div>
      </section>
      <section className='as-cont-filter-list'>
        <Filter
          items={ ['Playlists', 'Artistas', 'Albums', 'Poscast y programas'] }
        />
      </section>
      <section
        className={ `as-section-items ${showShadow ? 'shadow' : ''}` }
        ref={ itemsContainerRef }
      >
        <div
          className='as-cont-items'
        >
          <ItemPlaylist
            img={ imgMyLikes }
            title='Tus me gusta'
            description={ <><BsPinAngleFill className='as-cont-items__item__pin-icon' /> Playlist • 112 canciones</> }
          />
          <ItemPlaylist
            img={ imgMyEpisodes }
            title='Tus episodios'
            description={ <><BsPinAngleFill className='as-cont-items__item__pin-icon' /> Episodios guardados y descargados</> }
          />

          { Array.from({ length: 5 }).map((_, i) => (
            <Fragment key={ i }>
              <ItemPlaylist
                img='https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1teqKQ-large.jpg'
                title='This is Caloncho'
                description='Playlist • Spotify' />
              <ItemPlaylist
                img='https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1mfl3U-large.jpg'
                title='This is Los Terricolas'
                description='Playlist • Tafoya Adrian' />
            </Fragment>
          )) }
        </div>
      </section>
    </aside>
  );
}

function ItemPlaylist({ img, title = '', description = '' }) {
  return (
    <>
      <article className='as-cont-items__item'>
        <div className='as-cont-items__item__cont-img'>
          <img className='as-cont-items__item__img' src={ img } alt="" />
          <div className='as-cont-items__item__hover-icon'><BsPlayFill /></div>
        </div>
        <div className='as-cont-items__item__cont-info'>
          <p className='as-cont-items__item__title'>{ title }</p>
          <span className='as-cont-items__item__description'>
            { description }
          </span>
        </div>
      </article>
    </>
  )
}

export default Aside;