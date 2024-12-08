import { Link } from "react-router-dom";
import { BsArrowDownCircle, BsBell, BsGithub } from "react-icons/bs";
import ButtonHome from "../../home/ButtonHome";
import SearchBar from "../../search/SearchBar";
import './styles/Header.css';
import ProfileButton from "./ProfileButton";

function Header() {
  return (
    <header className="hd-header">
      <Link to='https://github.com/adriantaf/' target="_blank" className="hd-link-spotify"><BsGithub /></Link>
      <div className="hd-center">
        <ButtonHome />
        <SearchBar />
      </div>
      <p className="hd-download-app"><BsArrowDownCircle style={{strokeWidth: '0.5px'}} /> Instalar aplicación</p>
      <div className="hd-right">
        <button className="hd-btn-notification">
          <BsBell />
        </button>
        <ProfileButton />
      </div>
    </header>
  )
}

export default Header;