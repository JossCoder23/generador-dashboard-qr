import { create } from 'zustand';

// Definimos la interfaz del usuario según tu controlador de Laravel
interface User {
  name: string;
  email: string;
  role: string;
  area_id: number | null;
  area:any;
}

interface AuthState {
  token: string | null;
  user: User | null;
  // Acciones para modificar el estado
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // Inicializamos leyendo el localStorage para no perder la sesión al recargar
  token: localStorage.getItem('auth_token'),
  user: JSON.parse(localStorage.getItem('user_data') || 'null'),
 
  setAuth: (token, user) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_data', JSON.stringify(user));
    set({ token, user });
  },

  logout: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    set({ token: null, user: null });
  },
}));