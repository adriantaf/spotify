/* eslint-disable react/prop-types */
import getOptimalImage from "../utils/getOptimalImage.js";
import imgDefaultPlaylist from '../assets/images/default-playlist.png';
import SearchItemCard from "./SearchItemCard";

function ContainerAlbums({ items }) {
  return (
    <div className='sp-search-result__cont-generic-items'>
      { items.map((item) => {
        if (!item) return null;
        
        const srcImage = item.images ? getOptimalImage(item.images) : imgDefaultPlaylist;
        const onliYear = item.release_date.slice(0, 4);
        const artistString = item.artists.map(artist => artist.name).join(', ');

        return (
          <SearchItemCard
            key={ item.id }
            id={ item.id }
            isSquare
            src={ srcImage }
            alt={ `Image of the album ${item.name}` }
            title={ item.name }
            description={ `${onliYear} • ${artistString}` }
          />
        )
      }) }
    </div>
  );
}

export default ContainerAlbums;
