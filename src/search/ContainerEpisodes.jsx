import SearchItemCard from "./SearchItemCard";
import imgDefaultPlaylist from '../assets/images/default-playlist.png';
import getOptimalImage from "../utils/getOptimalImage.js";

/* eslint-disable react/prop-types */
function ContainerEpisodes({ items }) {
  return (
    <div className='sp-search-result__cont-generic-items'>
      { items.map((item) => {
        function formatReleaseDate(releaseDate, precision) {
          const monthsString = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

          // Separar los componentes de la fecha
          const [year, month, day] = releaseDate.split('-').map(Number);

          switch (precision) {
            case 'year':
              return `${year}`; // Solo el año
            case 'month':
              return `${monthsString[month - 1]} ${year}`; // Mes abreviado y año
            case 'day':
              return `${day} ${monthsString[month - 1]} ${year}`; // Día, mes abreviado y año
            default:
              throw new Error('Precision desconocida');
          }
        }

        if (!item) return null;
        
        const srcImage = item.images ? getOptimalImage(item.images) : imgDefaultPlaylist;
        const date = formatReleaseDate(item.release_date, item.release_date_precision);
        const minutes = Math.floor(item.duration_ms / 60000);

        return (
          <SearchItemCard
            key={ item.id }
            id={ item.id }
            isSquare
            src={ srcImage }
            alt={ `Image of the album ${item.name}` }
            title={ item.name }
            description={ `${date} • ${minutes} min` }
          />
        )
      }) }
    </div>
  );
}

export default ContainerEpisodes;