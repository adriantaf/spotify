/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import './styles/Filter.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Filter({ indexSelected = null, items }) {
  const filterListRef = useRef(null);
  const [showRightButton, setShowRightButton] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);

  function handleClickShowLeftButton() {
    filterListRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }

  function handleClickShowRightButton() {
    filterListRef.current.scrollTo({ left: filterListRef.current.scrollWidth, behavior: 'smooth' });
  }

  useEffect(() => {
    function handleScroll() {
      const filterList = filterListRef.current;
      if (!filterList) return;

      const { scrollLeft, scrollWidth, clientWidth } = filterList;

      if (scrollWidth === clientWidth) {
        return;
      }

      if (scrollLeft === 0) {
        setShowLeftButton(false);
        setShowRightButton(true);
      } else if (scrollLeft + clientWidth === scrollWidth) {
        setShowLeftButton(true);
        setShowRightButton(false);
      } else {
        setShowLeftButton(true);
        setShowRightButton(true);
      }
    }

    filterListRef?.current.addEventListener('scroll', handleScroll);

    handleScroll();
  }, [])

  return (
    <div className="as-controls-filter">
      { showLeftButton === true && (
        <button
          className='as-controls-filter__button left'
          onClick={ handleClickShowLeftButton }
        ><BsChevronLeft /></button>
      ) }
      { showRightButton === true && (
        <button
          className='as-controls-filter__button right'
          onClick={ handleClickShowRightButton }
        ><BsChevronRight /></button>
      ) }
      <div className='as-filter-list' ref={ filterListRef }>
        { items.map((item, i) => (
          <button
            key={ i }
            className={ `as-filter-list__item ${i === indexSelected ? 'selected' : ''}` }
          >{ item }</button>
        )) }
      </div>
    </div>
  );
}

export default Filter;