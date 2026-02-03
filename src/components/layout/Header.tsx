import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const Header = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
        <div>LOGO</div>
        <div>
            <span>{ user!.name }</span>
            <span>{ user!.area.name }</span>
            <button onClick={ handleLogout }>Salir</button>
        </div>
    </header>
  );
};

export default Header;