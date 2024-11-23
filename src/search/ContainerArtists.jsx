/* eslint-disable react/prop-types */
import imgDefault from '../assets/images/default-user.png';
import getOptimalImage from "../utils/getOptimalImage.js";
import SearchItemCard from "./SearchItemCard.jsx";

function ContainerArtists({ items }) {
  return (
    <div className='sp-search-result__cont-generic-items'>
      { items.map((item) => {
        if (!item) return null;
        
        const srcImage = getOptimalImage(item.images) || imgDefault;

        return (
          <SearchItemCard
            key={ item.id }
            id={ item.id }
            isSquare={ false }
            src={ srcImage }
            alt={ `Image of the artist ${item.name}` }
            title={ item.name }
            description={ 'Artista' }
          />
        )
      }) }
    </div>
  );
}

export default ContainerArtists;