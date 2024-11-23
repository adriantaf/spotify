/* eslint-disable react/prop-types */
import { BsPlayFill } from 'react-icons/bs';
import './styles/SearchItemCard.css';

function SearchItemCard({ isSquare, isPlayable = true, id, src, alt, title, description }) {
  return (
    <article id={ id } className="sr-item-card">
      <div className="sr-item-card__cont-image">
        <img
          className="sr-item-card__image"
          src={ src }
          style={ { borderRadius: isSquare ? '4px' : '50%' } }
          alt={ `Image of the ${alt} artist` } />
        { isPlayable && (
          <button className='sr-item-card__btn-play'>
            <BsPlayFill />
          </button>
        ) }
      </div>
      <p className="sr-item-card__name">{ title }</p>
      <span style={ { color: '#ddd', fontSize: '.9rem' } }>
        { description }
      </span>
    </article>
  );
}

export default SearchItemCard;