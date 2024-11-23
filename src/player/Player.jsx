import { BsFilePlay, BsPcDisplay, BsPlayCircleFill, BsRepeat, BsShuffle, BsSkipEndFill, BsSkipStartFill, BsViewList, BsVolumeDown } from 'react-icons/bs';
import './Player.css';
import { useState } from 'react';

function Player() {
  const [volume, setVolume] = useState(90);
  const [timeline, setTimeline] = useState(35);

  function handleVolumeChange(e) {
    setVolume(e.target.value);
  }

  function handleTimelineChange(e) {
    setTimeline(e.target.value);
  }

  return (
    <div className="rp-reproductor">
      <section className='rp-reproductor__cont-info'>
        <img
          className='rp-reproductor__img'
          src="https://i.scdn.co/image/ab67616d00004851827dff3b8e671b3703e5bfb0"
          alt="" />
        <div>
          <p className='rp-reproductor__name'>Yo Ya Sabia Pa Donde Iba</p>
          <p className='rp-reproductor__author'>Los Chavalitos</p>
        </div>
      </section>
      <section className='rp-reproductor__cont-player'>
        {/* boton play y repetir, son toggle */ }
        <div className='rp-reproductor__cont-controls'>
          <button className='rp-reproductor-button sm'><BsShuffle /></button>
          <button className='rp-reproductor-button'><BsSkipStartFill /></button>
          <button className='rp-reproductor-button toogle-play'><BsPlayCircleFill /></button>
          <button className='rp-reproductor-button'><BsSkipEndFill /></button>
          <button className='rp-reproductor-button sm'><BsRepeat /></button>
        </div>
        <div className='rp-reproductor__cont-timeline'>
          <span className='rp-reproductor__time'>2:27</span>
          <input
            className='rp-reproductor__timeline'
            type="range"
            value={ timeline }
            min={ 0 }
            max={ 100 }
            onChange={ handleTimelineChange }
            style={ {
              "--timeline-value": `${timeline}%`
            } }
            step={ 1 } />
          <span className='rp-reproductor__time'>3:10</span>
        </div>
      </section>
      <section className='rp-reproductor__others'>
        {/* falta icono de letra */ }
        <button className='rp-reproductor-button sm'><BsFilePlay /></button>
        <button className='rp-reproductor-button sm'><BsViewList /></button>
        <button className='rp-reproductor-button sm'><BsPcDisplay /></button>
        <div className='rp-reproductor__volume'>
          <button className='rp-reproductor-button'><BsVolumeDown /></button>
          <input
            className='rp-reproductor__timeline'
            type="range"
            value={ volume }
            min={ 0 }
            max={ 100 }
            onChange={ handleVolumeChange }
            style={ {
              width: '100px',
              "--timeline-value": `${volume}%`
            } }
            step={ 1 } />
        </div>
      </section>
    </div>
  );
}

export default Player;