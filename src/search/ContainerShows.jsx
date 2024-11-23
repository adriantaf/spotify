/* eslint-disable react/prop-types */
import getOptimalImage from '../utils/getOptimalImage.js';
import imgDefaultPlaylist from '../assets/images/default-playlist.png';
import SearchItemCard from "./SearchItemCard";

function ContainerShows({ items }) {
  return (
    <div className='sp-search-result__cont-generic-items'>
      { items.map((item) => {
        if (!item) return null;
        
        const srcImage = item.images ? getOptimalImage(item.images) : imgDefaultPlaylist;
        
        return (
          <SearchItemCard
            key={ item.id }
            id={ item.id }
            isSquare
            isPlayable={ false }
            src={ srcImage }
            alt={ `Image of the podcast ${item.name}` }
            title={ item.name }
            description={ item.publisher }
          />
        )
      }) }
    </div>
  );
}

export default ContainerShows;