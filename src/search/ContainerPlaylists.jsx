/* eslint-disable react/prop-types */
import getOptimalImage from '../utils/getOptimalImage.js';
import imgDefaultPlaylist from '../assets/images/default-playlist.png';
import SearchItemCard from './SearchItemCard';

function ContainerPlaylists({ items }) {
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
            src={ srcImage }
            alt={ `Image of the playlist ${item.name}` }
            title={ item.name }
            description={ `De ${item.owner.display_name}` }
          />
        )
      }) }
    </div>
  )
}

export default ContainerPlaylists;