import React, { useState } from 'react';
import api from '../api/axios';
import type { LoginResponse } from '../types/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.SubmitEvent) => {
    
    e.preventDefault();
   
    try {
      const response = await api.post<LoginResponse>('/login', { email, password });
      
      // Guardar token para futuras peticiones
      localStorage.setItem('auth_token', response.data.token);
      
      alert('¡Bienvenido!');
      // Aquí redirigirías al Dashboard
    } catch (error) {
      alert('Error en las credenciales');
    }

  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;