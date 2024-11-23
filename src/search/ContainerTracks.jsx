/* eslint-disable react/prop-types */
import TrackItem from "./TrackItem";

function ContainerTracks({ items, trackListening, setTrackListening}) {
  return (
    <div className='sp-search-result__cont-tracks'>
      { items.map((item) => {
        return (
          <TrackItem
            key={ item.id }
            id={ item.id }
            srcImage={ item.album.images[2].url }
            previewUrl={ item.preview_url }
            nameTrack={ item.name }
            artistArray={ item.artists }
            durationInMs={ item.duration_ms }
            trackListening={ trackListening }
            setTrackListening={ setTrackListening }
          />
        )
      }) }
    </div>
  );
}

export default ContainerTracks;