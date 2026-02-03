import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import './css/Header.css';

const Header = () => {

  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className='header'>
        <img src="https://upch-repo-comercial.s3.dualstack.us-east-1.amazonaws.com/generales/logo-black.webp" />
        <section>
            <div>
              <span>{ user?.name }</span>
              <span>{ user?.area.nombre }</span>
            </div>
            <div>
              <span></span>
            </div>
            <button onClick={ handleLogout }>Salir</button>
        </section>
    </header>
  );
};

export default Header;