import { BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import './styles/ButtonHome.css';
import { useLocation, useNavigate } from "react-router-dom";

function ButtonHome() {
  const location = useLocation();
  const navitate = useNavigate();
  function handleClick() {
    if (location.pathname !== '/') {
      navitate('/');
    }
  }

  return (
    <button 
    className="hm-button-home"
    style={{
      color: location.pathname === '/' ? '#f3f3f3' : ""
    }}
    onClick={handleClick}>
      { location.pathname !== '/' ? <BsHouseDoor /> : <BsHouseDoorFill />}
    </button>
  )
}

export default ButtonHome;
