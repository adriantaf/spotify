/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import './styles/TrackItem.css';

function TrackItem({ id, srcImage, previewUrl, nameTrack, artistArray, durationInMs, trackListening, setTrackListening }) {
  const audioRef = useRef(null);
  const TRACK_STATUS = {
    play: 'play',
    pause: 'pause',
    stop: 'stop'
  }
  const [trackStatus, setTrackStatus] = useState(TRACK_STATUS.stop);

  useEffect(() => {
    if (trackListening !== audioRef) {
      setTrackStatus(TRACK_STATUS.stop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackListening]);

  function formatTheDuration(timeMs) {
    let minutes = parseInt(timeMs / 60000);
    let seconds = parseInt((timeMs % 60000) / 1000);
    if (seconds < 10) {
      seconds = '0' + seconds.toString()
    }
    return `${minutes}:${seconds}`;
  }

  function toogleAudio() {
    if (audioRef.current) {
      if (trackListening && trackListening !== audioRef) {
        if (!trackListening.paused) {
          trackListening.current.pause();
        }
        trackListening.current.currentTime = 0;
        trackListening = null
        setTrackStatus(TRACK_STATUS.stop)
      }

      if (audioRef.current.paused) {
        audioRef.current.play();
        setTrackStatus(TRACK_STATUS.play);
      } else {
        audioRef.current.pause();
        setTrackStatus(TRACK_STATUS.pause);
      }

      setTrackListening(audioRef);
    }
  }

  return (
    <article
      id={ id }
      className='sp-search-result__track'
    >
      <section className='sp-search-result__track__cont-img'>
        { previewUrl && (
          <audio
            src={ previewUrl }
            ref={ audioRef }
            style={ { display: 'none' } } ></audio>
        ) }
        <button
          style={ { backgroundImage: `url(${srcImage})` } }
          className='sp-search-result__track__btn-img'
          onClick={ previewUrl && toogleAudio }
        >
          { previewUrl && (<div className='sp-search-result__track__cont-icon-btn'>
            { trackStatus === TRACK_STATUS.pause || trackStatus === TRACK_STATUS.stop ? <BsPlayFill /> : <BsPauseFill /> }
          </div>) }
        </button>
      </section>
      <section className='sp-search-result__track__cont-info'>
        <p
          className='sp-search-result__track__name'
          style={
            { color: trackStatus === TRACK_STATUS.play || trackStatus === TRACK_STATUS.pause ? '#76F68D' : '' }
          }
        >{ nameTrack }</p>
        <p className='sp-search-result__track__author'>
          { artistArray.map((artist, index, arr) => {
            let name = artist.name;
            if (index < arr.length - 1) {
              name += ', '
            }
            return name;
          }) }
        </p>
      </section>
      <section className='sp-search-result__track__cont-time'>
        <span className='sp-search-result__track__time'>{ formatTheDuration(durationInMs) }</span>
      </section>
    </article>
  );
}

export default TrackItem;