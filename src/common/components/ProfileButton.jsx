import { useLocation, useNavigate } from 'react-router-dom';
import imgProfile from '/img/profile.jpg';

function ProfileButton() {
  const navigate=useNavigate();
  const location=useLocation();
  
  function handleClick() {
    if (location.pathname !== '/profile') {
      navigate('/profile');
    }
  }

  return (
    <button className="hd-btn-profile" onClick={ handleClick }>
      <img src={ imgProfile } alt="Foto de perfil" />
    </button>
  )
}

export default ProfileButton;