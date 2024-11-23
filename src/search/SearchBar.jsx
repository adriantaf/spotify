import { useEffect, useRef, useState } from "react";
import { BsX } from "react-icons/bs";
import './styles/SearchBar.css';
import { useToken } from "../common/context/TokenProvider.jsx";
import { useSearchResult } from "./SearchProvider.jsx";
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBar() {
  const { token } = useToken();
  const { setData } = useSearchResult();  // Acceder a setData del contexto
  const [search, setSearch] = useState('');
  const REGEX = /^[a-zA-Z0-9\s]+$/;
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    if (location.pathname !== '/search') {
      navigate('/search');
    }
  }

  function handleChange(e) {
    let inputValue = e.target.value.trim();
    if (inputValue === "") {
      setSearch(inputValue);
    } else if (REGEX.test(inputValue)) {
      setSearch(inputValue);
    }
  }

  function clearSearch() {
    handleClick();
    inputRef.current.focus();
    inputRef.current.value = '';
  }

  useEffect(() => {
    if (search && token) {
      const params = new URLSearchParams({
        query: search,
        type: 'track,album,artist,playlist,episode,show', //track,album,artist,playlist,episode,audiobook,show
        limit: 5,
        market: 'MX',
      })
      const url = `https://api.spotify.com/v1/search?${params.toString()}`
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => setData(result))  // Actualizar el contexto con el resultado
        .catch((error) => console.error('Error:', error));
    } else {
      setData(null)
    }
  }, [search, token, setData]);  // Dependencias actualizadas

  return (
    <nav className="sp-search__container">
      { search && (
        <button
          className="sp-search__clear"
          onClick={ clearSearch }
        >
          <BsX />
        </button>
      ) }
      <input
        ref={ inputRef }
        className="sp-search__input"
        type="text"
        onChange={ handleChange }
        onClick={ handleClick }
        placeholder="¿Qué quieres reproducir?"
      />
    </nav>
  );
}

export default SearchBar;
